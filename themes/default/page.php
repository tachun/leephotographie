<?php theme_include('header'); ?>

<section id="page-section" class="about-section row">    
  <div class="row about-content">
    <aside class="col3 no-right-padding">
      <?php theme_include('nav'); ?>
    </aside>
    <div class="col9 main-photo">
      <?php echo page_content(); ?>
    </div>
  </div>
</section>

<?php theme_include('footer'); ?>

<script>
  $('#slider-pager').hide();
</script>