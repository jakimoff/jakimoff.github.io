// Input Text component

Vue.component('input-text', {
  template: `
    <div class="label_text">
      <input :value="val" type="text" name="text" class="input_text" :placeholder="placeholder">
    </div>`,
  props: {
    placeholder: {required: false},
    val: {required: false}
  }
});

// Input Numeric component

Vue.component('input-numeric', {
  template: `
    <div class="label_numeric">
      <span class="btn-caret plus" @click="value++">+</span>
      <input v-model="value" type="number" name="numbers" class="input_number">
      <span class="btn-caret minus" @click="value--">-</span>
    </div>`,
  data: function() {
    return {
      value: 0
    }
  }
});

// Input Range component

Vue.component('my-input-range', {
  template: `
    <div class="label_range">
      <input v-model="value" type="range" name="range" :min="min" :max="max">
    </div>`,
  props: {
    min: {required: true},
    max: {required: true},
    val: {required: true}
  },
  data: function () {
    return {
      value: 0
    }
  }
});

// Btn ON/OFF component

Vue.component('my-btn-toggle', {
  template: `
    <div class="label_btn">
      <input type="checkbox" :id="id" :checked="isChecked"/>
      <label :for="id"></label>
    </div>`,
  props: {
    id: {required: true},
    isChecked: {default: true}
  }
});

// Input Radio component

Vue.component('my-radio', {
  template: `
    <div class="radio">
      <input :value="text" :name='name' type='radio' :checked="isChecked" :disabled="isDisabled" :id="id">
      <label :for="id" class="radio-label">
        {{ text }}
      </label>
    </div>`,
  props: {
    text: {required: true},
    id: {required: true},
    name: {required: true},
    isChecked: {default: false},
    isDisabled: {default: false}
  }
});

// Input Checkbox component

Vue.component('my-checkbox', {
  template: `
    <div class="checkbox">
      <input :value="text" :name='name' :checked="isChecked" :disabled="isDisabled" type='checkbox' :id="id">
      <label :for="id">
        {{ text }}
      </label>
    </div>
  `,
  props: {
    text: {required: true},
    id: {required: true},
    name: {required: true},
    isChecked: {default: false},
    isDisabled: {default: false}
  }
});

// Tab + Tabs components

Vue.component('tabs',{
  template:`
  <div class="tabs_wrap">
    <div class="tabs">
      <ul class="tabs_this">
        <li v-for='tab in tabs' :class="{'is-active': tab.isActive}">
          <a :href='tab.href' @click='selectedTab(tab)'>{{tab.name}}</a>
        </li>
      </ul>
    </div>
    <div class='tab-detail'>
      <slot></slot>
    </div>
  </div>
`,
  mounted(){
    console.log(this.$children)
  },
  data(){
    return {tabs:[]};
  },
  created(){
    this.tabs = this.$children
  },
  methods:{
    selectedTab(selectedTab){
      this.tabs.forEach( tab => {
        tab.isActive = (tab.name === selectedTab.name) }
      )
    }
  }
});

Vue.component('tab',{
  template:`
    <div v-show='isActive'><slot></slot></div>
  `,
  props:{
    name:{required:true},
    selected:{default:false}
  },
  data(){
    return{
      isActive:false
    }
  },
  computed:{
    href(){
      return '#'+this.name.toLowerCase().replace(/ /g,'-');
    }
  },
  mounted(){
    this.isActive = this.selected
  }
});

// Select + options components

Vue.component('my-select', {
  template: `
    <div class="label_dropdown_wrap">
      <div class="label_dropdown">
        <select class="select">
          <slot></slot>
        </select>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 129 129" enable-background="new 0 0 129 129" width="20px" height="17px">
          <g>
            <path d="m121.3,34.6c-1.6-1.6-4.2-1.6-5.8,0l-51,51.1-51.1-51.1c-1.6-1.6-4.2-1.6-5.8,0-1.6,1.6-1.6,4.2 0,5.8l53.9,53.9c0.8,0.8 1.8,1.2 2.9,1.2 1,0 2.1-0.4 2.9-1.2l53.9-53.9c1.7-1.6 1.7-4.2 0.1-5.8z" fill="#006DF0"/>
          </g>
        </svg>
      </div>
    </div>`,
  mounted(){
    console.log(this.$children)
  }
});

Vue.component('my-option', {
  template: `
    <option :value="name">{{ name }}</option>
  `,
  props: {
    name: {required:true}
  }
});

// Multi select

Vue.component('my-select-left', {
  template: `
     <select name="all_options" multiple='multiple' class="all_options no-scroll">
        <slot></slot>
     </select>
  `
});

Vue.component('my_side_btn', {
  template: `
    <div class="my_side_btn">
      <span class="go_in" @click="goIn">in</span>
      <span class="go_out" @click="goOut">out</span>
    </div>
  `,
  props: ['goIn', 'goOut'],
  methods: {
    goIn: function () {
      let e = document.querySelectorAll('.all_options option');
      let b = document.querySelector('.chosen_options option');
      for (let item of e) {
        if (item.selected === true) {
          b.insertAdjacentHTML('afterend', '<option>' + item.value + '</option>');
          item.remove();
        }
      }
    },
    goOut: function () {
      let e = document.querySelector('.all_options option');
      let b = document.querySelectorAll('.chosen_options option');
      for (let item of b) {
        if (item.selected === true) {
          e.insertAdjacentHTML('afterend', '<option>' + item.value + '</option>');
          item.remove();
        }
      }
    }
  }
});

Vue.component('my-select-right', {
  template: `
    <select name="chosen_options" multiple='multiple' class="chosen_options no-scroll">
      <slot></slot>
    </select>
  `
});

Vue.component('my-multi-select', {
  template: `
    <div class="my_side">
      <div class="my_side_main">
       <slot></slot>
      </div>
    </div>
  `
});

Vue.component('my-btn', {
  template: `
    <div class="label_btn_default" :id="id">
      <button>{{ text }}</button>
    </div>
  `,
  props: {
    text: {required: true},
    id: {required: true}
  }
});

// Vue app

new Vue({
  el: '#app'
});