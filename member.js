function skillsMember() {
    var member = document.getElementById("member").value;
    var skills = document.getElementById("skills").value;
    var memberSkills = document.getElementById("memberSkills").value;
    var memberSkills = member + " " + skills;
    document.getElementById("memberSkills").value = memberSkills;
    document.getElementById("member").value = "";
    document.getElementById("skills").value = "";
}