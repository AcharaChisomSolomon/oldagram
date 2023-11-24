const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const postsEl = document.getElementById("posts");

let postsHTML = "";

for (let i = 0; i < posts.length; i++) {
    const { name, username, location, avatar, post, comment, likes } = posts[i];

    if (i > 0 && i < posts.length) {
        postsHTML += `<div class="space"></div>`;
    }

    postsHTML += `
    <article class="user">

        <div class="user__header">
            <div class="avatar">
                <img 
                    src="./${avatar}" 
                    alt="an image of the account owner">
            </div>
            <div class="user__details">
                <p class="user__name">
                    ${name}
                </p>
                <p class="user__location">
                    ${location}
                </p>
            </div>
        </div>

        <div class="user__post-img">
            <img 
                src="./${post}" 
                alt="an image of the account owner">
        </div>

        <div class="user__icons">
            <div class="icon">
                <img 
                    src="./images/icon-heart.png" 
                    alt="an image of the account owner"
                    class="icon__main">
            </div>
            <div class="icon">
                <img 
                    src="./images/icon-comment.png" 
                    alt="an image of the account owner"
                    class="icon__main">
            </div>
            <div class="icon">
                <img 
                    src="./images/icon-dm.png" 
                    alt="an image of the account owner"
                    class="icon__main">
            </div>
        </div>

        <div class="user__likes">
            <p>
                ${likes} likes
            </p>
        </div>

        <div class="user__caption">
            <p>
                ${username} <span>${comment}</span>
            </p>
        </div>

    </article>
    `;
}

postsEl.innerHTML = postsHTML;