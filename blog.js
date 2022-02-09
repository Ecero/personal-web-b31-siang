let blogs = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image");

  image = URL.createObjectURL(image.files[0]);

  let blog = {
    author: "Rhoma Irama",
    title: title,
    content,
    image,
    postedAt: new Date(),
  };

  blogs.push(blog);

  renderBlog();
}

function renderBlog() {
  let lengthData = blogs.length;

  console.log(blogs[0].image);

  let blogContainer = document.getElementById("contents");

  // blogContainer = "data-default, data1, data2"

  blogContainer.innerHTML = firstBlogContent();

  // blogContainer = "data-default"

  let i = 0;
  for (i; i < lengthData; i++) {
    blogContainer.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
            <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-post">Post Blog</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank">
                    ${blogs[i].title}
                </a>
            </h1>
            <div class="detail-blog-content">
                ${blogs[i].postedAt} | ${blogs[i].author}
            </div>
            <p>
                ${blogs[i].content} 
            </p>
            </div>
        </div>`;
  }

  // blogContainer = "data-default, data1, data2, data3"
}

function firstBlogContent() {
  return `
    <div class="blog-list-item">
    <div class="blog-image">
      <img src="assets/blog-img.png" alt="" />
    </div>
    <div class="blog-content">
      <div class="btn-group">
        <button class="btn-edit">Edit Post</button>
        <button class="btn-post">Post Blog</button>
      </div>
      <h1>
        <a href="blog-detail.html" target="_blank">Pasar Coding di Indonesia Dinilai Masih Menjanjikan</a>
      </h1>
      <div class="detail-blog-content">
        12 Jul 2021 22:30 WIB | Ichsan Emrald Alamsyah
      </div>
      <p>
        Ketimpangan sumber daya manusia (SDM) di sektor digital masih
        menjadi isu yang belum terpecahkan. Berdasarkan penelitian
        ManpowerGroup, ketimpangan SDM global, termasuk Indonesia,
        meningkat dua kali lipat dalam satu dekade terakhir. Lorem ipsum,
        dolor sit amet consectetur adipisicing elit. Quam, molestiae
        numquam! Deleniti maiores expedita eaque deserunt quaerat! Dicta,
        eligendi debitis?
      </p>
    </div>
  </div>
    `;
}
function getFullTime() {
  let date = time.getDate();
  let month = time.getMonth;
  let year = time.FullYear;
  let hours = time.Hours;
  let minutes = time.Minutes;
  console.log(date);
  console.log(month);
  console.log(year);
  console.log(hours);
  console.log(minutes);
  return `${date} ${month} ${year} ${hours}:${minutes} WIB`;
}
function getDistanceTime(time) {
  const distance = new Date() - new Date();
  const milisecond = 1000;
  const secondsInMinute = 60;
  const minutesInHour = 60;
  const secondInHour = secondsInMinute * minutesInHour;
}
