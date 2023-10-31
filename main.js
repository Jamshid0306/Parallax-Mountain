class Parallax {
  constructor(obj) {
    this.text = document.querySelector(obj.text);
    this.sky = document.querySelector(obj.sky);
    this.rock = document.querySelector(obj.rock)
    window.addEventListener("scroll", () => {
      this.moveElements();
    });
  }
  moveElements() {
    this.speed = this.text.getAttribute("data-speed");
    this.scale = this.sky.getAttribute("data-scale");
    if (window.scrollY > 70) {
      return
    } else {
      this.text.style.transform = `translateY(${window.scrollY * this.speed}px)`;
      this.sky.style.transform = `scale(${this.scale - (window.scrollY / 200)})`
      this.rock.style.transform = `scale(${1})`
      this.rock.style.transform = `scale(${this.scale - (window.scrollY / 200)})`


      
    }
  }
}

const parallax = new Parallax({
  text: ".header__title",
  sky: "._sky",
  rock: "._rock",
});