<p>
  <a href="<?= route('reset_password', array($user->reset_password_token)) ?>">Click here</a> to reset your EasyBid password.
</p>

<p><em>-<?= Config::get('rfpez.email_signature_name') ?></em></p>