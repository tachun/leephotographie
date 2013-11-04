<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title><?php echo page_title('Page can’t be found'); ?> - <?php echo site_name(); ?></title>

    <meta name="description" content="<?php echo site_description(); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link rel="stylesheet" href="<?php echo theme_url('/css/style.css'); ?>">

    <link rel="alternate" type="application/rss+xml" title="RSS" href="<?php echo rss_url(); ?>">
    <link rel="shortcut icon" href="<?php echo theme_url('img/favicon.icon'); ?>">

    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

    <script>var base = '<?php echo theme_url(); ?>';</script>
    <script src="<?php echo theme_url('/js/modernizr-2.6.2.min.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/jquery-1.9.1.min.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/response.min.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/screenfull.min.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/responsiveslides.min.js'); ?>"></script>
    <script src="<?php echo theme_url('/js/main.js'); ?>"></script>

    <meta name="viewport" content="width=device-width">
    <meta name="generator" content="Anchor CMS">

    <meta property="og:title" content="<?php echo site_name(); ?>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="<?php echo current_url(); ?>">
    <meta property="og:image" content="<?php echo theme_url('img/og_image.gif'); ?>">
    <meta property="og:site_name" content="<?php echo site_name(); ?>">
    <meta property="og:description" content="<?php echo site_description(); ?>">

    <?php if(customised()): ?>
      <!-- Custom CSS -->
      <style><?php echo article_css(); ?></style>

      <!--  Custom Javascript -->
      <script><?php echo article_js(); ?></script>
    <?php endif; ?>
  </head>

  <body>
    <div id="wrapper" class="row app-container">

      <header class="header row">
        <h1 class="mobile-logo hide-on-desktop hide-on-tablet">
          <a href="<?php echo base_url(); ?>"><img src="<?php echo theme_url('img/logo.png'); ?>" alt="Main logo"></a>
        </h1>
        
        <div class="col3">
          <h1 class="logo hide-on-mobile">
            <a href="<?php echo base_url(); ?>"><img src="<?php echo theme_url('img/logo.png'); ?>" alt="Main logo"></a>
          </h1>
        </div>
        <div class="col9">
          <?php
            if ( strtolower(page_title()) == 'home' ){
            } else {
              echo "<h1 class='section-title'>".page_title()."</h1><hr>";
            }
          ?>
        </div>
      </header>

      