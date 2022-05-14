<template>
  <div class="modal">
    <div class="modal-box relative">
      <div class="grid grid-cols-12">
        <div class="col-span-11">
          <h3 class="text-lg font-bold"><slot name="title" /></h3>
        </div>
        <div class="w-full col-span-1 text-right">
          <slot name="close" />
        </div>
      </div>
      <div class="pt-3">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>
