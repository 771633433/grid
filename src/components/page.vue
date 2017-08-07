<template>
<div>
  <div>
    <div id="example"> 
        <div id="listView"></div> 
        <div id="pager" class="k-pager-wrap"></div> 
      </div> 
  </div>
  <p class="p1">
      <router-link to="/foo">go to foo</router-link>&nbsp;&nbsp;&nbsp;
      <router-link to="/bar">go to bar</router-link>  
  </p>

  <script type="text/x-kendo-template" id="template">
        <div class="product">
            <img src="/static/img/foods/#= ProductID #.jpg" alt="#: ProductName # image" />
            <h3>#:ProductName#</h3>
            <p>#= ProductID #</p>
        </div>
    </script>
 </div>
</template>

<script type="text/javascript">
  $(function() {
        var dataSource = new kendo.data.DataSource({
            data: products,
            pageSize: 21
        });

        $("#pager").kendoPager({
            dataSource: dataSource
        });

        $("#listView").kendoListView({
            dataSource: dataSource,
            template: kendo.template($("#template").html())
        });
    });

  export default {

  }

</script>
<style>
@import '/static/style/examples-offline.css';
@import '/static/style/kendo.common.min.css';
@import '/static/style/kendo.dataviz.default.min.css';
@import '/static/style/kendo.dataviz.min.css';
@import '/static/style/kendo.default.min.css';
@import '/static/style/kendo.rtl.min.css';
   #listView {
            padding: 10px 5px;
            margin-bottom: 0px;
            min-height: 510px;
        }
        .product {
            float: left;
            position: relative;
            width: 111px;
            height: 170px;
            margin: 0 5px;
            padding: 0;
        }
        .product img {
            width: 110px;
            height: 110px;
        }
        .product h3 {
            margin: 0;
            padding: 3px 5px 0 0;
            max-width: 96px;
            overflow: hidden;
            line-height: 1.1em;
            font-size: .9em;
            font-weight: normal;
            text-transform: uppercase;
            color: #999;
        }
        .product p {
            visibility: hidden;
        }
        .product:hover p {
            visibility: visible;
            position: absolute;
            width: 110px;
            height: 110px;
            top: 0;
            margin: 0;
            padding: 0;
            line-height: 110px;
            vertical-align: middle;
            text-align: center;
            color: #fff;
            background-color: rgba(0,0,0,0.75);
            transition: background .2s linear, color .2s linear;
            -moz-transition: background .2s linear, color .2s linear;
            -webkit-transition: background .2s linear, color .2s linear;
            -o-transition: background .2s linear, color .2s linear;
        }
        .k-listview:after {
            content: ".";
            display: block;
            height: 0;
            clear: both;
            visibility: hidden;
        }

        .p1{
            font-size: 16px;
        }

        a{
            text-decoration: none;
        }
</style>