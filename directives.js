import Vue from 'vue'

Vue.directive('click-outside',{
  bind: function (el, binding, vnode) {
      el.eventSetDrag = function () {
          el.setAttribute('data-dragging', 'yes');
      }
      el.eventClearDrag = function () {
          el.removeAttribute('data-dragging');
      }
      el.eventOnClick = function (event) {
          var dragging = el.getAttribute('data-dragging');
          // Check that the click was outside the el and its children, and wasn't a drag
          if (!(el == event.target || el.contains(event.target)) && !dragging) {
              // call method provided in attribute value
              vnode.context[binding.expression](event);
          }
      };
      document.addEventListener('touchstart', el.eventClearDrag);
      document.addEventListener('touchmove', el.eventSetDrag);
      document.addEventListener('click', el.eventOnClick);
      document.addEventListener('touchend', el.eventOnClick);
      document.addEventListener('mousedown', el.eventOnClick);
  }, unbind: function (el) {
      document.removeEventListener('touchstart', el.eventClearDrag);
      document.removeEventListener('touchmove', el.eventSetDrag);
      document.removeEventListener('click', el.eventOnClick);
      document.removeEventListener('touchend', el.eventOnClick);
      document.removeEventListener('mousedown', el.eventOnClick);
      el.removeAttribute('data-dragging');
  },
});

Vue.directive('scroll', {
  inserted: function (el, binding) {
    let f = function (evt) {
      if (binding.value(evt, el)) {
        window.removeEventListener('scroll', f)
      }
    }
    window.addEventListener('scroll', f)
  }
});

// NOT USED trying to create directive that work on click
Vue.directive('show-class', {
  bind(el, binding) {
                    document.querySelector('.'+binding.value).scrollIntoView({block: "start", behavior: "smooth"});
                }
});

