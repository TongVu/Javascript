// Lí do hay dùng const là để biến ít bị đổi kiểu
const companies=[
    {name: 'one', category: 'finance', start: 1981, end: 2003},
    {name: 'two', category: 'retail', start: 1992, end: 2008},
    {name: 'three', category: 'auto', start: 1999, end: 2007},
    {name: 'four', category: 'retail', start: 1989, end: 2010},
    {name: 'five', category: 'technology', start: 2009, end: 2014},
    {name: 'six', category: 'finance', start: 1987, end: 2010},
    {name: 'seven', category: 'auto', start: 1986, end: 1996},
    {name: 'eight', category: 'technology', start: 2011, end: 2016},
    {name: 'nine', category: 'retail', start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 25, 64, 32];


/************************************************************ */

//forEach
/*
companies.forEach((e)=>{
    console.log(e.name);
})
*/



/************************************************************ */






//filter - lọc array, như tên thôi
/*  GET 21 & OLDER
    var peopleCanDrink = [];
    Method 1 - traditional:
 
    for(let i = 0; i < ages.length; i++){
    if(ages[i] >= 21)
        peopleCanDrink.push(ages[i]);
    }

    Method 2 - with filter
    peopleCanDrink = ages.filter((age)=>{
    if(age >= 21)
        return true;
    })

    Method 3 - ES6 do chỉ có 1 tham số truyền vào
    peopleCanDrink = ages.filter(age => age >= 21 );

    console.log(peopleCanDrink);
*/






/* GET RETAIL COMPANY
    var retailCompanies = [];

    retailCompanies = companies.filter(company => company.category === 'retail');

    console.log(retailCompanies);
*/





/* GET RETAIL COMPANY & START SOONER 1990
    var oldRetailCompanies = [];
    oldRetailCompanies = companies.filter(company=>{
    if(company.category === 'retail' 
    && company.start < 1990)
        return true;
    });

    console.log(oldRetailCompanies);
*/




/*  GET COMPANIES LASTED 10YRS OR MORE

    var filterCompanies = [];
    filterCompanies = companies.filter(company=>{
    if((company.end - company.start) >= 10)
        return true;
    });

    console.log(filterCompanies);
 */





 /************************************************************ */

//map - vừa lọc vừa có thể tạo array mới

/* TẠO MẢNG companiesName từ mảng companies
    var companiesName = [];
    companiesName = companies.map(company=>{
    return company.name;
    });

    console.log(companiesName);

*/



// Tạo mảng gồm Name, category và start từ các companies

// var mapCompanies = companies.map(company=>{
//     return `${company.name} - ${company.category} - ${company.start}`;
// });

// console.log(mapCompanies);




// Tạo mảng bình phương từ mảng ages
// var squareAges = ages.map(index=>{
//     return `${index} square is: ${index*index}`;
// });

// console.log(squareAges);





 
/************************************************************ */

//sort - giá trị return của sort: 
// (a, b) < 0: a trước b
// ngược lại, b trước a
// bằng nhau thì bằng 0

// Sắp xêp các companies theo năm thành lập chiều tăng dần

// var sortCompanies = [];
// sortCompanies = companies.sort((company1, company2)=>{
//     if(company1.start > company2.start)
//         return 1;
//     else    
//         return -1;
// });


// var sortCompanies = [];
// sortCompanies = companies.sort((company1, company2) => (company1.start > company2.start? 1 : -1));
//
// console.log(sortCompanies);


// Sắp xếp tuổi

// var sortAges = [];
// sortAges = ages.sort((age1, age2) => (age1 > age2 ? 1 : -1));
// console.log(sortAges);


/************************************************************ */
//reduce - giống hàm tính sum

// var agesSum = 0;
// for(let i = 0; i < ages.length; i++){
//     agesSum += ages[i];
// }


// var agesSum = 0;
// agesSum = ages.reduce( (total, age) =>{ 
//     return (total + age);
// }, 0);

// var agesSum = 0;
// agesSum = ages.reduce((total, age)=>{return (total + age)}, 0);
// console.log(agesSum);

//Tính tổng các năm của các cty

// var yearSum = 0;

// yearSum = companies.reduce((total, company)=>{
//     return total + (company.end - company.start);
// }, 0);

// console.log(yearSum);

//Tìm max trong tuổi
// ages.reduce((max, currentVal)=>{
//  Trong mảng ages gọi reduce
//  reduce tạo 1 biến là max, còn currentVal là biến đếm theo từng phần tử trong mảng ages nên nó có giá trị tương ứng
//  nếu có phần tử nào lớn hơn max thì gán giá trị của nó cho max, sau đó so sánh tới hết mảng 
// }, 0) 0 là giá trị ban đầu được gán cho biến max
var maxAge;

maxAge = ages.reduce((max, currentValue)=>{
    if(max < currentValue)
        max = currentValue;
    return max;
}, 0);

console.log(maxAge);