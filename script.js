function scrollToJobs() {
    document.getElementById('jobs').scrollIntoView({ behavior: 'smooth' });
}

function showJobDetails(jobTitle) {
    alert(`Details of ${jobTitle}:\n\nApply now to get your dream job!`);
}
