# Button

## Basic Use

Use type, size to define the style of the button

<div class="example">
  <div>
    <dy-button>Default</dy-button>
    <dy-button type="primary">Primary</dy-button>
    <dy-button type="success">Success</dy-button>
    <dy-button type="warning">Warning</dy-button>
    <dy-button type="danger">Danger</dy-button>
  </div>
</div>

<details>
  <summary>Detail</summary>

  ```vue
  <template>
    <dy-button>Default</dy-button>
    <dy-button type="primary">Primary</dy-button>
    <dy-button type="success">Success</dy-button>
    <dy-button type="warning">Warning</dy-button>
    <dy-button type="danger">Danger</dy-button>
    <br />
    <br />

  </template>

  <script lang="ts" setup>
    import { dy-button } from 'dy-ui';
  </script>

  ```

</details>

<style>
  .example {
    border: 1px solid #f5f5f5;
    border-radius: 5px;
    padding:20px
  }

  .dy-button {
    margin: 10px 5px;
  }

  details > summary:first-of-type {
    font-size: 10px;
    padding: 8px 0;
    cursor: pointer;
    color: #1989fa;
  }
</style>
