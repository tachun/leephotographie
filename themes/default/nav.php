<?php if(has_menu_items()): ?>
<nav class="main-nav hide-on-mobile">
  <ul class="navigation cf">
    <li>
      <a href="" class="jsOpenSubmenu <?php echo (menu_active() ? 'class="selected"' : ''); ?>">WORK</a>      
      <ul class="submenu" {% if current_p == 'index' %}style="display:none;{% endif %}">
        <?php while(rwar_latest_posts(20)): ?>
        <li><a href="<?php echo article_url(); ?>"><?php echo article_title(); ?></a></li>
        <?php endwhile; ?>
      </ul>
    </li>
    <?php while(menu_items()): ?>
    <li><a href="<?php echo menu_url(); ?>" <?php echo (menu_active() ? 'class="selected"' : ''); ?>> <?php echo menu_title(); ?></a></li>
    <?php endwhile; ?>
  </ul>
</nav>
<?php endif; ?>


<nav class="main-nav-small-device hide-on-tablet hide-on-desktop">
  <div class="mobile-nav-toggle">
    <span class="mobile-nav-toggle-bar"></span>
    <span class="mobile-nav-toggle-bar"></span>
    <span class="mobile-nav-toggle-bar"></span>
  </div>
  <ul id="mobile-nav" class="navigation cf">
    <li>
      <a href="" class="jsOpenSubmenu {% if current_p == 'work' %} selected{% endif %}">WORK</a>
      <ul class="submenu" {% if current_p == 'index' %}style="display:none;{% endif %}">
        <?php while(rwar_latest_posts(20)): ?>
        <li><a href="<?php echo article_url(); ?>"><?php echo article_title(); ?></a></li>
        <?php endwhile; ?>
      </ul>
    </li>
    <?php while(menu_items()): ?>
    <li><a href="<?php echo menu_url(); ?>"> <?php echo menu_title(); ?></a></li>
    <?php endwhile; ?>
  </ul>
</nav>