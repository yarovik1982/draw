// class RectangleDrawer {
//    constructor() {
//        this.rectangle = null;
//        this.startX = 0;
//        this.startY = 0;
//    }

//    mousedown(e) {
//        this.startX = e.clientX;
//        this.startY = e.clientY;
//        this.rectangle = document.createElement('div');
//        this.rectangle.className = 'rectangle';
//        this.rectangle.style.left = this.startX + 'px';
//        this.rectangle.style.top = this.startY + 'px';
//        document.body.appendChild(this.rectangle);
//    }

//    mousemove(e) {
//        if (!this.rectangle) return;
//        this.rectangle.style.width = Math.abs(e.clientX - this.startX) + 'px';
//        this.rectangle.style.height = Math.abs(e.clientY - this.startY) + 'px';
//        this.rectangle.style.left = Math.min(e.clientX, this.startX) + 'px';
//        this.rectangle.style.top = Math.min(e.clientY, this.startY) + 'px';
//    }

//    mouseup(e) {
//        this.rectangle = null;
//    }
// }

// const drawer = new RectangleDrawer();

// document.body.addEventListener('mousedown', function(e) {
//    drawer.mousedown(e);
// });

// document.body.addEventListener('mousemove', function(e) {
//    drawer.mousemove(e);
// });

// document.body.addEventListener('mouseup', function(e) {
//    drawer.mouseup(e);
// });



class ShapeDrawer {
   constructor() {
       this.shapeSelect = document.getElementById('shapeSelect');
   }

   drawShape(e) {
       const shape = document.createElement('div');
       shape.className = 'shape';

       if (this.shapeSelect.value === 'square') {
           shape.style.width = '50px';
           shape.style.height = '50px';
       } else if (this.shapeSelect.value === 'circle') {
           shape.style.borderRadius = '50%';
           shape.style.width = '50px';
           shape.style.height = '50px';
       } else if (this.shapeSelect.value === 'triangle') {
           shape.style.width = '0';
           shape.style.height = '0';
           shape.style.borderLeft = '25px solid transparent';
           shape.style.borderRight = '25px solid transparent';
           shape.style.borderBottom = '50px solid #000';
       }

       shape.style.left = e.clientX - 25 + 'px';
       shape.style.top = e.clientY - 25 + 'px';
       document.body.appendChild(shape);
   }
}

const drawer = new ShapeDrawer();

document.body.addEventListener('click', function(e) {
   drawer.drawShape(e);
});