document.querySelector('#text-me-btn').addEventListener('click',function(){

    content_container.innerHTML=`
    <h1>Text me</h1>
    <div class="text-me acrylic medium-high shadow fade-in">
    <form action="https://formspree.io/your@email.com"
    method="POST">
    <label>Name</label> <br>
    <input type="text" name="name" class="shadow"/> <br> <br>
    <label>E-mail</label> <br>
    <input type="email" name="_replyto" class="shadow"/> <br> <br>
    <label>Message</label> <br>
    <textarea name="message" class="shadow"></textarea> <br>
    <input type="hidden" name="_next" value="success.html" />
    
    <!-- <div class="g-recaptcha" data-sitekey="6LdeMlcUAAAAAGkI5tS0wQldmqp_J4CDONTKZnXw"></div> -->
    <input type="submit" value="Send" />
</form>
    </div>`;
    
    
    
    });

    