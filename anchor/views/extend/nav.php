<ul class="items">
    <?php $pages = array('fields', 'variables', 'metadata', 'themes', 'plugins'); ?>
    
    <?php foreach($pages as $page): $slug = 'admin/extend/' . $page; ?>
  <li class="<?php if(Uri::current() == $slug) echo 'active'; ?>">
    <a href="<?php echo Uri::to('admin/extend/' . $page); ?>">

    </a>
  </li>
  <?php endforeach; ?>
</ul>