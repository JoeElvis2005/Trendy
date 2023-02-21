$(document).ready(function(){
    // let imageOne=$('#image-one')
    // let imageTwo=$('#image-two')
    // let imageThree=$('#image-three')
    // let originalImageSrcOne=imageOne.attr("src")
    // let originalImageSrcTwo=imageTwo.attr("src")
    // let originalImageSrcThree=imageThree.attr("src")

    let productImages=$('.product-img')
    
    productImages.each(function(){
        let originalImg=$(this).attr("src")
        $(this).mouseenter(function(){
            let newImg=$(this).data('new')
            $(this).attr("src",newImg)
        })
        $(this).mouseleave(function(){
            $(this).attr("src",originalImg)
        })
    })
})










//     imageOne.mouseenter(function(){
//         let newSourceOne=$(this).data('newone')
//         $(this).attr("src",newSourceOne)
//     })
//     imageTwo.mouseenter(function(){
//         let newSourceTwo=imageTwo.data('newtwo')
//         $(this).attr("src",newSourceTwo)
//     })
//     imageThree.mouseenter(function(){
//         let newSourceThree=$(this).data('newthree')
//         $(this).attr("src",newSourceThree)
//     })

//     imageOne.mouseleave(function(){
//         $(this).attr("src",originalImageSrcOne)
//     })
//     imageTwo.mouseleave(function(){
//         $(this).attr("src",originalImageSrcTwo)
//     })
//     imageThree.mouseleave(function(){
//         $(this).attr("src",originalImageSrcThree)
//     })
// })