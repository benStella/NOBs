<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="./public/css/style.css">
    <link rel="icon" href="./public/images/favicon.oe.ico">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>nobsnow</title>
</head>
<body background="./public/images/500NOBsBricksBackground.jpg">

    <div id="container">
        
        <!-- navigation links -->
        <?php include './public/includes/header.php' ?>

        <h1>it worked!</h1>
        
        


        <!-- Slideshow container -->
    <div class="slideshow-container">

    <!-- Full-width images with number and caption text -->
    <div class="mySlides fade">
      <img src="./public/images/CCW.jpg" style="width:50%">
    </div>
  
    <div class="mySlides fade">
      <img src="./public/images/Crunchwraps.jpg" style="width:50%">
    </div>
  
    <div class="mySlides fade">
      <img src="./public/images/NOBs8.jpg" style="width:50%">
    </div>

    <!-- hotsauce not same height as other pictures -->
    <!-- <div class="mySlides fade">
        <img src="./public/images/NOHSs.jpg" style="width:50%;">
      </div> -->

      <div class="mySlides fade">
        <img src="./public/images/AppleBomb.jpg" style="width:50%">
      </div>

      <div class="mySlides fade">
        <img src="./public/images/NOBs4.jpg" style="width:50%">
      </div>
      
      <div class="mySlides fade">
        <img src="./public/images/NOBs5.jpg" style="width:50%">
      </div>      
  </div>
  <br>
        <div id="Locate">
            <h1>LOCATE US</h1>
            <iframe 
                id="locate-us" 
                src="https://streetfoodfinder.com/NOBsNow1" 
                frameborder="0"
                width=""></iframe>
            </iframe>
        </div>

        <div class="sheriff-video-div">
            <h1>COOKING UP JUSTICE</h1>
            <iframe 
                src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FSheriffWayneIvey%2Fvideos%2F522854056048526%2F&show_text=false&width=560&t=0"
                class="sheriff-video" 
                width="560" 
                height="314" 
                style="border:none;overflow:hidden" 
                scrolling="no" 
                frameborder="0" 
                allowfullscreen="true" 
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" 
                allowFullScreen="true">
            </iframe>
        </div>

        <h1 class="social-media-header">SOCIAL MEDIA</h1>

        <section class="social-media">
            <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FNOBsNow1%2F%3Fref%3Dembed_page&tabs=timeline&width=500&height=800&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" 
            width="500" 
            height="800" 
            style="border:none;overflow:hidden" 
            scrolling="no" 
            frameborder="0" 
            allowfullscreen="true" 
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>

            <footer>
                <div class="social-media-links">
                    <a href="https://twitter.com/nobsnow1"><img src="./public/images/socials/X.svg" alt="X/Twitter" width="50"></a>
                    <a href="https://www.instagram.com/nobsnow1"><img src="./public/images/socials/instagram.svg" alt="Instagram" width="50"></a>
                </div>
            </footer>
        </section>

    </div>
</body>

<script src="./public/js/script.js"></script>
</html>