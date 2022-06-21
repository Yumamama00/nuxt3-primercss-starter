<template>
  <div class="flash">Flash message goes here.</div>

  <i-carbon-accessibility />
  <button class="btn btn-primary" type="button">Primary</button>
  <form>
    <label for="name">Name</label>
    <input id="name" class="form-control" type="text" />

    <label for="email">Email address</label>
    <input id="email" class="form-control" type="email" />

    <label> <input type="checkbox" /> Remember me </label>

    <label>
      <input id="potato" type="radio" name="radio-group-example" checked />
      Potato
    </label>
    <label>
      <input id="tomato" type="radio" name="radio-group-example" /> Tomato
    </label>

    <button class="btn" type="submit">Submit</button>
  </form>
</template>
