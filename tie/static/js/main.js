// Vue components

let tie = new Vue({
  el: '#tie',
  data: {
    fill: '#382E2C',
    background: 'url("../../static/img/general/tie.png") no-repeat center center',
    colorPattern: '#ab1a6c',
    sizeLine: 1,
    rotateLine: 0,
    rotateImg: 0,
    positionX: 0,
    positionY: 0,
    positionXImg: 0,
    positionYImg: 0,
    data: 200,
    image: '',
    positionData: 0,
    positionYData: 0,
    positionXData: 0
  },
  methods: {
    insertColor(color) {
      this['fill'] = color;
    },
    insertBack(back) {
      this['background'] = back;
    },
    insertColorPattern(color) {
      this['colorPattern'] = color;
    },
    insertSizeLine(size) {
      this['sizeLine'] = size;
    },
    insertRotateLine(deg) {
      this['rotateLine'] = deg;
    },
    insertPositionX(deg) {
      this['positionX'] = deg;
    },
    insertPositionY(deg) {
      this['positionY'] = deg;
    },
    insertPositionXImg(px) {
      this['positionXImg'] = px;
    },
    insertPositionYImg(px) {
      this['positionYImg'] = px;
    },
    insertWidth(px) {
      this['data'] = px;
    },
    insertImg(file) {
      this['image'] = file;
    },
    insertRotateImg(deg) {
      this['rotateImg'] = deg;
    },
    insertRotateData(deg) {
      this['positionData'] = deg;
    },
    insertPositionXData(px) {
      this['positionXData'] = parseFloat(px) + parseFloat(this['positionData']);
    },
    insertPositionYData(px) {
      this['positionYData'] =  parseFloat(px) + parseFloat(this['positionData']);
    },
  }
});

let honor = new Vue({
  el: '#app1',
  data: {
    image: ''
  },
  methods: {
    onFileChange(e) {
      var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
      this.createImage(files[0]);
    },
    createImage(file) {
      var image = new Image();
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        tie.insertImg(e.target.result);
        vm.image = e.target.result;
      };
      reader.readAsDataURL(file);
    },
    removeImage: function (e) {
      tie.insertImg('');
      this.image = '';
    }
  }
});

let rotate = new Vue({
  el: '#rotate',
  data() {
    return {
      value: 1
    }
  },
  computed: {
    rotateDeg: {
      get: function () {
        tie.insertRotateLine(this.value);
      }
    }
  }
});

let rotateImg = new Vue({
  el: '#rotate1',
  data() {
    return {
      value: 0
    }
  },
  computed: {
    rotateDegImg: {
      get: function () {
        tie.insertRotateImg(this.value);
      }
    }
  }
});

let horizontal = new Vue({
  el: '#horizontal',
  data: {
    value: 0
  },
  computed: {
    horizontalDeg: {
      get: function() {
        tie.insertPositionX(this.value);
      }
    }
  }
});

let vertical = new Vue({
  el: '#vertical',
  data() {
    return {
      value: 0
    }
  },
  computed: {
    verticalDeg: {
      get: function() {
        tie.insertPositionY(this.value);
      }
    }
  }
});

let horizontalImg = new Vue({
  el: '#horizontal1',
  data() {
    return {
      value: 240
    }
  },
  computed: {
    horizontalDegImg: {
      get: function() {
        tie.insertPositionXImg(this.value);
        tie.insertPositionXData(this.value);
      }
    }
  }
});

let verticalImg = new Vue({
  el: '#vertical1',
  data() {
    return {
      value: 1100
    }
  },
  computed: {
    verticalDegImg: {
      get: function() {
        tie.insertPositionYImg(this.value);
        tie.insertPositionYData(this.value);
      }
    }
  }
});

let scale = new Vue({
  el: '#scale',
  data() {
    return {
      value: 1
    }
  },
  computed: {
    scaleDeg: {
      get: function() {
        tie.insertSizeLine(this.value);
      }
    }
  }
});

let data = new Vue({
  el: '#scale1',
  data() {
    return {
      value: 200
    }
  },
  computed: {
    dataAll: {
      get: function () {
        tie.insertWidth(this.value);
        tie.insertRotateData(this.value / 2);
      }
    }
  }
});

Vue.component("color-picker", {
  template: "#color-picker-template",
  props: ["change", "initial"],
  data: function() {
    return {
      isVisible: false,
      h: Math.random() * (1 - 360) + 110,
      s: Math.random() * (1 - 100) + 110,
      l: Math.random() * (1 - 100) + 110
    }
  },
  computed: {
    color: function() {
      var hsl = hsb2hsl(parseFloat(this.h) / 360, parseFloat(this.s) / 100, parseFloat(this.l) / 100);

      var c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";

      var s = "hsl(" + c + ")";
      this.change({
        color: s
      });
      return s;
    },
    colorString: function() {
      var c = this.h + ", " + this.s + "%, " + this.l + "%";
      return c;
    },
    gradientH: function() {
      var stops = [];
      for (var i = 0; i < 7; i++) {
        var h = i * 60;

        var hsl = hsb2hsl(parseFloat(h / 360), parseFloat(this.s) / 100, parseFloat(this.l / 100));

        var c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
        stops.push("hsl(" + c + ")")
      }

      return {
        backgroundImage: "linear-gradient(to right, " + stops.join(', ') + ")"
      }
    },
    gradientS: function() {
      var stops = [];
      var c;
      var hsl = hsb2hsl(parseFloat(this.h / 360), 0, parseFloat(this.l / 100));
      c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
      stops.push("hsl(" + c + ")");

      var hsl = hsb2hsl(parseFloat(this.h / 360), 1, parseFloat(this.l / 100));
      c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
      stops.push("hsl(" + c + ")");

      return {
        backgroundImage: "linear-gradient(to right, " + stops.join(', ') + ")"
      }
    },

    gradientL: function() {
      var stops = [];
      var c;

      var hsl = hsb2hsl(parseFloat(this.h / 360), 0, 0);
      c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
      stops.push("hsl(" + c + ")");

      var hsl = hsb2hsl(parseFloat(this.h / 360), parseFloat(this.s / 100), 1);

      c = hsl.h + ", " + hsl.s + "%, " + hsl.l + "%";
      stops.push("hsl(" + c + ")");

      return {
        backgroundImage: "linear-gradient(to right, " + stops.join(', ') + ")"

      }
    }
  },
  methods: {
    show: function() {
      this.isVisible = true;
    },
    hide: function() {
      this.isVisible = false;
    },
    toggle: function() {
      this.isVisible = !this.isVisible;
    }
  },
});

var app = new Vue({
  el: "#color-picker-this",
  data: {
    color: ""
  },
  methods: {
    updateColor: function(event) {
      this.color = event.color;
      tie.insertColor(this.color);
    }
  }
});

var appLow = new Vue({
  el: "#color-picker-this1",
  data: {
    color: ""
  },
  methods: {
    updateColor: function(event) {
      this.color = event.color;
      tie.insertColorPattern(this.color);
    }
  }
});

function hsb2hsl(h, s, b) {
  var hsl = {
    h: h
  };
  hsl.l = (2 - s) * b;
  hsl.s = s * b;

  if (hsl.l <= 1 && hsl.l > 0) {
    hsl.s /= hsl.l;
  } else {
    hsl.s /= 2 - hsl.l;
  }

  hsl.l /= 2;

  if (hsl.s > 1) {
    hsl.s = 1;
  }

  if (!hsl.s > 0) hsl.s = 0;


  hsl.h *= 360;
  hsl.s *= 100;
  hsl.l *= 100;

  return hsl;
}

let colorselect = new Vue({
  el: '#color_select',
  data: {
    items: [
      { color: '#382E2C' },
      { color: '#545876' },
      { color: '#53565A' },
      { color: '#C1A0DA' },
      { color: '#857874' },
      { color: '#A51890' },
      { color: '#CA005D' },
      { color: '#C4D600' },
      { color: '#007681' },
      { color: '#0df' },
      { color: '#0df' },
      { color: '#5f5' }
    ]
  },
  methods: {
    change_color(e) {
      tie.insertColor(e.target.dataset['color'])
    }
  }
});

let tieline = new Vue({
  el: '#tie_line',
  data: {
    images: [
      { background: 'url("../../static/img/general/tie.png") no-repeat center center' },
      { background: 'url("../../static/img/general/tie_line1.png") no-repeat center center' },
      { background: 'url("../../static/img/general/tie_line2.png") no-repeat center center' },
      { background: 'url("../../static/img/general/tie_line3.png") no-repeat center center' }
    ]
  },
  methods: {
    change_back(e) {
      tie.insertBack(e.target.dataset['background']);
    }
  }
});

let saveImage = new Vue({
  el: '#demo_your_tie',
  data: {
    image: data
  },
  methods: {
    generateScreenshot(e) {
      e.preventDefault();
      html2canvas(document.getElementById('tie'), {
        width: 260,
        height: 565,
        scale: 10,
        logging: true,
        profile: true,
        useCORS: true}).then(function(canvas) {
        setDPI(canvas, 600);
        console.log(canvas);
        var data = canvas.toDataURL('image/png', 0.1);
        // console.log(data);
        var src = encodeURI(data);
        // document.getElementById('screenshot').src = src;
        document.getElementById('size').innerHTML = src.length + ' bytes';
        document.getElementById('test').href = data;
        document.getElementById('test').download = 'atkinsons_' + new Date().toLocaleString() + '.png';
      });
    }
  }
});

function setDPI(canvas, dpi) {
  // Set up CSS size.
  canvas.style.width = canvas.style.width || canvas.width + 'px';
  canvas.style.height = canvas.style.height || canvas.height + 'px';

  // Get size information.
  var scaleFactor = dpi / 96;
  var width = parseFloat(canvas.style.width);
  var height = parseFloat(canvas.style.height);

  // Backup the canvas contents.
  var oldScale = canvas.width / width;
  var backupScale = scaleFactor / oldScale;
  var backup = canvas.cloneNode(false);
  backup.getContext('2d').drawImage(canvas, 0, 0);

  // Resize the canvas.
  var ctx = canvas.getContext('2d');
  canvas.width = Math.ceil(width * scaleFactor);
  canvas.height = Math.ceil(height * scaleFactor);

  // Redraw the canvas image and scale future draws.
  ctx.setTransform(backupScale, 0, 0, backupScale, 0, 0);
  ctx.drawImage(backup, 0, 0);
  ctx.setTransform(scaleFactor, 0, 0, scaleFactor, 0, 0);
}

// Custom JS

(function ($) {

  $(document).ready(function () {
    svg4everybody({});
    $('#tie_line span:first-child').addClass('active');
  });

  let swiper = new Swiper('.swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  });

  $('#color_select span').on('click', function () {
      $('#color_select').children().removeClass('active');
      $(this).addClass('active');
  });

  $('#tie_line span').on('click', function () {
    $('#tie_line').children().removeClass('active');
    $(this).addClass('active');
  });

  $('.color-picker').on('click', function () {
    $('#color_select').children().removeClass('active');
  });

})(jQuery);