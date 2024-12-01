         
         function showSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display= 'flex'
         }
    
         function hideSidebar(){
            const sidebar = document.querySelector('.sidebar')
            sidebar.style.display= 'none'
         }
         function showImage(imageSrc, buttonElement) {
            const imageElement = document.getElementById('displayed-image');
            const buttons = document.querySelectorAll('.button');
           
            imageElement.src = imageSrc;
            buttons.forEach((button) => {button.classList.remove('focus');});
            buttonElement.classList.add('focus');
         }
         function myFunction() {
            window.location.href = "services.html";
         }