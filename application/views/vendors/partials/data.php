<?php if (!isset($defer)) $defer = false; ?>
<div class="vendor-data">
  <?php echo Jade\Dumper::_html(datum("Contact Name", $vendor->contact_name)); ?>
  <?php echo Jade\Dumper::_html(datum("Email", $vendor->user->email, true)); ?>
  <?php echo Jade\Dumper::_html(datum("Address", $vendor->address."<br />".$vendor->city.", ".$vendor->state." ".$vendor->zip)); ?>
  <?php echo Jade\Dumper::_html(datum("Website", $vendor->homepage_url, true)); ?>
  <?php echo Jade\Dumper::_html(datum("Portfolio", $vendor->portfolio_url, true)); ?>
  <?php echo Jade\Dumper::_html(datum("Source code", $vendor->sourcecode_url, true)); ?>
  <div class="datum">
    <label>SAM.gov</label>
    <div class="content">
      <?php if ($vendor->sam_entity_name): ?>
        <span class="green">Yes, under "<?php echo Jade\Dumper::_text($vendor->sam_entity_name); ?>"</span>
      <?php else: ?>
        <span class="red">No</span>
      <?php endif; ?>
    </div>
  </div>
  <div class="datum">
    <label>DSBS</label>
    <div class="content">
      <?php if ($vendor->dsbs_name): ?>
        <span class="green">Yes, under "<?php echo Jade\Dumper::_text($vendor->dsbs_name); ?>"
</span>
        <?php echo Jade\Dumper::_html(View::make('vendors.partials.dsbs_certifications')->with('user_id', $vendor->dsbs_user_id)->with('defer', $defer)); ?>
      <?php else: ?>
        <span class="red">No</span>
      <?php endif; ?>
    </div>
  </div>
</div>