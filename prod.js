function register(){

    email=mail.value
    username=uname.value
    password=psw.value

    userdetails={email,username,password}

    if(email in localStorage){
        alert("user found already")
        window.location="index.html"
    }

    // else if(email=""){
    //     window.location="register.html"
    //     alert("enter username & password")
    // }
    else{
        localStorage.setItem(email,JSON.stringify(userdetails))
    }

}

function login(){

    email2=mail.value
    password2=psw.value

    if(email2 in localStorage){
        data=JSON.parse(localStorage.getItem(email2))
        if(password2==data["password"]){
            window.location="prodetails.html"
        }
    }
}

function addProduct(){
   
    product={pname:pname.value,pid:pid.value,product_type:prodt.value,price:price.value,expiry:expid.value}

    if(product.pid in localStorage){
        alert("Product details already exist")
    }
    else{

        localStorage.setItem(product.pid,JSON.stringify(product))

        alert("New product details added")
    
    }
    }

    function subProduct(){

        window.location="homepage.html"
    }

    function search(){

        keyid=s1.value

        if(keyid in localStorage){


        pro=JSON.parse(localStorage.getItem(keyid))


        result.innerHTML=` 
        <h3 class="text-info">Product Name: ${pro.pname} </h3>
        <h3 class="text-info">Product Id: ${pro.pid} </h3>
        <h3 class="text-info">Product Type: ${pro.product_type} </h3>
        <h3 class="text-info">product Price: ${pro.price} </h3>
        <h3 class="text-info">Product Expiry: ${pro.expiry} </h3>` 

    }
    else{
        result.innerHTML=""
        alert('Product details not present')
    }

    }

    function logout(){

        window.location="index.html"
    }
