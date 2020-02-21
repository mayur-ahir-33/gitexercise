let displayDiv = document.getElementById('displayDiv');

const namesArr =[
    'Ashish Shah',
    'Rashmin Chhatrala',
    'Yash Dubey',
    'Prakash Jain',
    'Yashraj Singh',
    'Viraj Sinha',
    'Rajesh Kumar',
    'Mahesh Marwadi',
    'Suresh Sahni',
    'Amar Vilas',
    'Virdas Singhania',
    'Rajeshwari Bindra',
    'Birendra  Bhalerao',
    'Virendra Bhupati',
    'Bhupendra Singh',
    'Bhuvam Bam',
    'Shri Raj',
    'Prashant Kamle',
    'Kamlesh Tomar',
    'Risabh Khare',
    'Rishi Kohli',
    'Kunwar Kharwanda',
    'Kartik Koli',
    'Komal Jain',
    'Kartikey Pandey'
];

const filter = () => {
    const input = document.getElementById('name');
    let filteredArr = namesArr.filter((name) => {
        return name.toLowerCase().includes(input.value);
    });


    display(input.value, filteredArr);

}

const display = (input, newNamesArr) => {
    displayDiv.innerHTML='';

    for (const name of newNamesArr) {
        const index = name.toLowerCase().indexOf(input);
        displayDiv.innerHTML += `<p class="ml-2">${name.substring(0, index)}<span><b>${name.substring(index, index+input.length)}</b></span>${name.substring(index+input.length)}</p>`;
    }
}
 