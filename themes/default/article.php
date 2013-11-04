<?php theme_include('header'); ?>

  <section id="article-<?php echo article_id(); ?>" class="article-section about-section row">    
    <div class="row about-content">
      <aside class="col3 no-right-padding">
        <?php theme_include('nav'); ?>
      </aside>
      <div class="col9 main-photo relative">
        <div class="project-desc-group">
          <p>PROJECT TEXT - </p>
          
          <?php
            $valueEN = article_custom_field('has_en');
            $valueFR = article_custom_field('has_fr');
            if ($valueEN){
              echo '<button class="openProjectDesc enDesc">EN</button>';
            }
            if ($valueFR){
              echo '<button class="openProjectDesc frDesc">FR</button>';
            }
          ?> 
          
        </div>

        <?php 
          $valueEN = article_custom_field('has_en');
          $valueFR = article_custom_field('has_fr');
          if ($valueEN){
            echo '<div id="en-desc" class="project-description"><a href="" class="close">X</a>';
            echo article_custom_field('en_desc');
            echo '</div>';
          }
          if ($valueFR){
            echo '<div id="fr-desc" class="project-description"><a href="" class="close">X</a>';
            echo article_custom_field('fr_desc');
            echo '</div>';
          }
        ?>

        <?php echo article_markdown(); ?>
      </div>
    </div>
  </section>
    
<?php theme_include('footer'); ?>