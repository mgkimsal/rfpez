<?php foreach($templates as $template): ?>
  <li class="template well">
    <div class="row-fluid">
      <div class="span6">
        <div class="title"><?php echo Jade\Dumper::_text($template->title); ?></div>
        <div class="author"><?php echo Jade\Dumper::_text($template->owner()->name); ?></div>
      </div>
      <div class="span4">
        <div class="forked">
          Forked <a href="#"><?php echo Jade\Dumper::_text($template->fork_count); ?> <?php echo Jade\Dumper::_text(Str::plural('time', $template->fork_count)); ?></a>
        </div>
        <?php if ($template->recommended): ?>
          <div class="recommended">&star; Recommended Template</div>
        <?php endif; ?>
      </div>
      <div class="span2">
        <a class="btn btn-success" href="<?php echo Jade\Dumper::_text(route('project_template_post', array($project->id, $template->id))); ?>">Fork</a>
      </div>
    </div>
  </li>
<?php endforeach; ?>