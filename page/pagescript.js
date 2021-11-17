let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');
window.onscroll = () =>{
    section.forEach(sec =>{
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');
    if(top >= offset && top < offset + height){
    navLinks.forEach(links =>{
    links.classList.remove('active');
    document.querySelector('header nav a[href*='+ id +']').classList.add('active');
    });
    }
    });
};

            let jsp_current_page = 1;
            let json_object = [
            { Rank:"1",Name: "Jyoshna"},
            { Rank:"2",Name: "Kartik"},
            { Rank:"3",Name: "Mrinal"},
            { Rank:"4",Name: "Arijit"},
            { Rank:"5",Name: "Anadi"},
            { Rank:"6",Name: "Lipi"},
            { Rank:"7",Name: "Anwesha"},
            { Rank:"8",Name: "Harshini"},
            { Rank:"9",Name: "Manaswini"},
            { Rank:"10",Name: "Tejaswini"},
            { Rank:"11",Name: "Susmita"},
            { Rank:"12",Name: "Shilpa"},
            { Rank:"13",Name: "Baby"},
            { Rank:"14",Name: "Jyoti"},
            { Rank:"15",Name: "Rudra"},
            { Rank:"16",Name: "Alok"},
            { Rank:"17",Name: "SUdhir"},
            {Rank:"18", Name: "Bulu"},
            {Rank:"19", Name: "Jigyasha"},
            { Rank:"20",Name: "Lipun"},
            {Rank:"21", Name: "Dipun"},
            { Rank:"22",Name: "Bignesh"},
            { Rank:"23",Name: "Silu"},
            { Rank:"24",Name: "Anjali"},
            { Rank:"25",Name: "Shrabani"},
        ];
        const jsp_records_per_page = json_object.length/5;
        function jsp_num_pages() {
            return Math.ceil(json_object.length / jsp_records_per_page);
        }
        function jsp_prev_page() {
            if (jsp_current_page > 1) {
                jsp_current_page--;
                jsp_change_page(jsp_current_page);
            }
        }
        function jsp_next_page() {
            if (jsp_current_page < jsp_num_pages()) {
                jsp_current_page++;
                jsp_change_page(jsp_current_page);
            }
        }
        function jsp_change_page(page) {
            const btn_prev = document.getElementById('btn-prev');
            const btn_next = document.getElementById('btn-next');
            const listing_table = document.getElementById('listing-table');
            let page_span = document.getElementById('page');
            if (page < 1) {
                page = 1;
            }
            if (page > jsp_num_pages()) {
                page = jsp_num_pages();
            }
            listing_table.innerHTML = '';
            for (let i = (page - 1) * jsp_records_per_page; i < (page * jsp_records_per_page) && i < json_object.length; i++) {
                listing_table.innerHTML += `<tr><td>${json_object[i].Rank}</td><td>${json_object[i].Name}</td></tr>`;
                
            }
            page_span.innerHTML = `${page}/${jsp_num_pages()}`;
            btn_prev.style.display = (page === 1) ? 'none' : 'inline-block';
            btn_next.style.display = (page === jsp_num_pages()) ? 'none' : 'inline-block';
        }
        window.onload = () => {
            document.getElementById('btn-prev').addEventListener('click', (e) => {
                e.preventDefault();
                jsp_prev_page();
            });
            document.getElementById('btn-next').addEventListener('click', (e) => {
                e.preventDefault();
                jsp_next_page();
            });
            jsp_change_page(1);
        };
        const image_input = document.querySelector("#image_input");
        var uploaded_image;
        image_input.addEventListener('change', function(){
            const reader = new FileReader();
            reader.addEventListener('load',() => {
                uploaded_image = reader.result;
                document.querySelector("#display_image").style.backgroundImage = `url(${uploaded_image})`;
            });
            reader.readAsDataURL(this.files[0]);
        })
