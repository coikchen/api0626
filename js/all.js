const obj = {
  data: {
    uuid: 'b580788b-f288-49ed-91ab-91e9bd538509',
    products: [],
  },
  getData: function() {
    const vm = this;
    const url = `https://course-ec-api.hexschool.io/api/${this.data.uuid}/ec/products`;

    axios.get(url)
        .then(function(response) {
          vm.data.products = response.data.data;
          vm.render();
        });
  },
  render: function() {
    const app = document.getElementById('app');
    const products = this.data.products;
    let str = '';
    products.forEach(function(item) {
      str += `
<div class="card">
<img src="${ item.imageUrl[0] }" class="card-img-top">
<div class="card-body">
<h5 class="card-title">${ item.title} <span class="badge badge-info"> ${item.category}</span></h5>
<p class="card-text">${ item.content }</p>
<div class="card-select"> 
<h4 class="card-price float-left">＄${ item.price }</h4>
<div class="input-group mb-3 card-select_left_side float-right">
<select class="custom-select" id="inputGroupSelect03" aria-label="Example select with button addon">
    <option selected>數量</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</div>


</div>

</div>

<div class="btn float-right">
<button type="button" class="btn btn-primary btn-sm">了解更多</button>
<button type="button" class="btn btn-secondary btn-sm">加入購物車</button>
</div>
</div>


`;
    });
    app.innerHTML = str;
  },
};

obj.getData();
