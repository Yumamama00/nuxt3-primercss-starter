<template>
  <!-- Alert -->
  <div class="flash">Information</div>
  <div class="flash mt-2 flash-warn">Warning</div>
  <div class="flash mt-2 flash-error">Error</div>

  <!-- Icon -->
  <div class="mt-6">
    <i-carbon-star
      class="mr-3 color-fg-accent"
      style="height: 30px; width: 30px"
    />
    <i-mdi-moon-waxing-crescent
      class="mr-3 color-fg-success"
      style="height: 30px; width: 30px"
    />
    <i-mdi-magnify class="color-fg-danger" style="height: 30px; width: 30px" />
  </div>

  <div class="mt-6" />

  <!-- Avatar -->
  <img
    class="avatar"
    alt="avatar"
    src="https://avatars.githubusercontent.com/u/68138518?s=96&v=4"
    width="48"
    height="48"
  />

  <!-- Box -->
  <div class="Box mt-6">
    <ul>
      <li class="Box-row">Box row one</li>
      <li class="Box-row">Box row two</li>
      <li class="Box-row">Box row three</li>
      <li class="Box-row">Box row four</li>
    </ul>
  </div>

  <!-- Button -->
  <div class="mt-6">
    <button class="btn mr-2" type="button">Default</button>
    <button class="btn btn-primary mr-2" type="button">Primary</button>
    <button class="btn btn-outline mr-2" type="button">Outline</button>
    <button class="btn btn-danger" type="button">Danger</button>
  </div>

  <!-- Label -->
  <div class="mt-6">
    <span class="Label mr-1 Label--accent">Accent</span>
    <span class="Label mr-1 Label--success">Success</span>
    <span class="Label mr-1 Label--attention">Attention</span>
    <span class="Label mr-1 Label--severe">Severe</span>
    <span class="Label mr-1 Label--danger">Danger</span>
    <span class="Label mr-1 Label--open">Open</span>
    <span class="Label mr-1 Label--closed">Closed</span>
    <span class="Label mr-1 Label--done">Done</span>
    <span class="Label mr-1 Label--sponsors">Sponsors</span>
  </div>

  <!-- Breadcrumbs -->
  <div class="mt-6">
    <nav aria-label="Breadcrumb">
      <ol>
        <li class="breadcrumb-item">
          <a href="https://github.com/business">Business</a>
        </li>
        <li class="breadcrumb-item">
          <a href="https://github.com/business/customers">Customers</a>
        </li>
        <li class="breadcrumb-item breadcrumb-item-selected">
          <a
            href="https://github.com/business/customers/mailchimp"
            aria-current="page"
            >MailChimp</a
          >
        </li>
      </ol>
    </nav>
  </div>

  <!-- Form -->
  <div class="mt-6">
    <form>
      <div>
        <label for="name">Name</label> <br />
        <input id="name" class="form-control" type="text" />
      </div>

      <div class="mt-3">
        <label for="email">Email address</label> <br />
        <input id="email" class="form-control" type="email" />
      </div>

      <div class="mt-3">
        <label> <input type="checkbox" /> Remember Me </label>
      </div>

      <div class="mt-3">
        <label>
          <input id="option1" type="radio" name="radio-group-example" checked />
          Option1
        </label>
        <label>
          <input id="option2" type="radio" name="radio-group-example" /> Option2
        </label>
      </div>

      <div class="mt-3">
        <textarea
          id="example-textarea"
          class="form-control"
          value="TextArea"
        ></textarea>
      </div>

      <div class="mt-3">
        <div class="radio-group">
          <input
            id="option-a"
            class="radio-input"
            type="radio"
            name="options"
          />
          <label class="radio-label" for="option-a">Option A</label>
          <input
            id="option-b"
            class="radio-input"
            type="radio"
            name="options"
          />
          <label class="radio-label" for="option-b">Option B</label>
          <input
            id="option-c"
            class="radio-input"
            type="radio"
            name="options"
          />
          <label class="radio-label" for="option-c">Option C</label>
        </div>
      </div>

      <div class="form-group successed pb-6">
        <div class="form-group-header">
          <label for="username-input">Username</label>
        </div>
        <div class="form-group-body">
          <input
            id="username-input"
            class="form-control"
            type="text"
            value="Yumamama00"
            aria-describedby="username-input-validation"
          />
        </div>
        <p id="username-input-validation" class="note success">
          Yumamama00 is available
        </p>
      </div>

      <button class="btn btn-primary my-3" type="button">Submit</button>
    </form>
  </div>
</template>
