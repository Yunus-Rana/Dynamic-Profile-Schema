



let user = {
    name: 'Yunus',
    age: 20,
    email: 'yunus@gmail.com',
    location: 'Lahore, Pakistan',

    login: function () {
        console.log(`User: "${this.name}" has logged in`)
    },
    logout: function () {
        console.log(`User: "${this.name}" has logged out`)
    },
    skills: ['html', 'css', 'javascript', 'python', 'c++'],
    logskills: function () {
        console.log(`skills of ${this.name} are:`)
        this.skills.forEach(skill => {
            console.log(skill)
        });
    },
    books: [
        { title: "Good boy Lumiere", price: 280, pages: 90 },
        { title: "The Journey", price: 160, pages: 90 }],
    logbooks: function () {
        console.log(`books by ${this.name} are:`)
        this.books.forEach(book => {
            console.log(`name: ${book.title}, price: ${book.price}, pages: ${book.pages}`)
        })
    },
    hobbies: [
        { hbname: "Badminton" },
        { hbname: "Soccer" },
        { hbname: "Video Games" },
        { hbname: "Browsing" }
    ],
    loghobbies: function () {
        console.log(`hobbies of ${this.name} are:`)
        this.hobbies.forEach(hobby => {
            console.log(hobby.hbname)
        })
    },
    education: [
        { level: "Matric", institute: "Iqra Huffaz School", marks: "84%", status: "Completed" },
        { level: "Intermediate", institute: "KIPS College", marks: "70%", status: "Completed" },
        { level: "BSCS", institute: "Virtual University", marks: "3.71 CGPA", status: "In Progress" }],
    logeducation: function () {
        this.education.forEach(study => {
            console.log(`${this.name} got ${study.marks}  in ${study.level}. He studied in ${study.institute}. degree status is 'Degree is ${study.status}'.`)
        })
    }
};


user.login();
console.log(user.location);
console.log(user.email);
console.log(user.age);
user.logskills();
user.logbooks();
user.loghobbies();
user.logeducation();
user.logout();