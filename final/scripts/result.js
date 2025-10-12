const getString = window.location.search;

const myGuide = new URLSearchParams(getString)

results.innerHTML = `Thanks for your guide application under ${myGuide.get("user")}, with an email of "${myGuide.get("email")}" that talks about ${myGuide.get("desc")}. We Will publish it as soon as we can!`;