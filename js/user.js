var $tagTableBody = $("#tagTableBody");
// create tag
var $createTagModal = $("#createTagModal");
var $createTagName = $("#createTagName");
var $createTagColor = $("#createTagColor");
var $createTagRating = $("createTagRating");


// Binding the event that user submitted $createTagModal
$("#createTagModal").submit(function (e) {
  // prevent default behavior of browser
  e.preventDefault();
  console.log("New Tag Form Submitted !");
  const tag = {
    name: $("#createTagName").val(),
    color: $("#createTagColor").val(),
    rating: $("#createTagRating").val(),
  };
  db.collection("tagList")
    .add(tag)
    .then(() => {
      // refresh page
      window.location.reload();
    })
    .catch((err) => console.log(err));
});

const tagList = [];

db.collection("tagList")
  .get()
  .then((docList) => {
    docList.forEach((doc) => {
      const tag = doc.data();
      const tagId = doc.id;
      const tagRating = doc.rating;
      tag["id"] = tagId;
      console.log("[tag]", tag);
      tagList.push(tag);
    });
    renderTagList();
  })
  .catch((err) => console.log("err", err));

function renderTagList() {
  //console.log("[tagList]", tagList);
  tagList.forEach((tag) => {
    // Create HTML table row for each tag
    if(tag.rating == "1"){
      //console.log("success");
      const tableRow = `<tr> 
            <td>
                ${tag.name}
            </td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
            </td>
            <td>
                <button data-id="${tag.id}" class="btn btn-warning update-tag-btn">Update</button>
            </td>
        </tr>`;
        $tagTableBody.append(tableRow);
    }
    else if(tag.rating == "2"){
      const tableRow = `<tr> 
            <td>
                ${tag.name}
            </td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
            </td>
            <td>
                <button data-id="${tag.id}" class="btn btn-warning update-tag-btn">Update</button>
            </td>
        </tr>`;
     $tagTableBody.append(tableRow);
    }
    else if(tag.rating == "3"){
      const tableRow = `<tr> 
            <td>
                ${tag.name}
            </td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
            </td>
            <td>
                <button data-id="${tag.id}" class="btn btn-warning update-tag-btn">Update</button>
            </td>
        </tr>`;
     $tagTableBody.append(tableRow);
    }
    else if(tag.rating == "4"){
      const tableRow = `<tr> 
            <td>
                ${tag.name}
            </td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
            </td>
            <td>
                <button data-id="${tag.id}" class="btn btn-warning update-tag-btn">Update</button>
            </td>
        </tr>`;
     $tagTableBody.append(tableRow);
    }
    else if(tag.rating == "5"){
      const tableRow = `<tr> 
            <td>
                ${tag.name}
            </td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-on.png">
            </td>
            <td>
                <button data-id="${tag.id}" class="btn btn-warning update-tag-btn">Update</button>
            </td>
        </tr>`;
     $tagTableBody.append(tableRow);
    }
    else if(tag.rating == "0"){
      const tableRow = `<tr> 
            <td>
                ${tag.name}
            </td>
            <td>
                <div class="color-box bg-${tag.color}"></div>
            </td>
            <td>
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
                <img src="https://cdnjs.cloudflare.com/ajax/libs/raty/3.1.1/images/star-off.png">
            </td>
            <td>
                <button data-id="${tag.id}" class="btn btn-warning update-tag-btn">Update</button>
            </td>
        </tr>`;
     $tagTableBody.append(tableRow);
    }
  });
  // bootstrap selectpicker
}


// binding click for .update-tag-btn
$("body").delegate(".update-tag-btn", "click", function () {
  // Get tag id from button element
  const tagId = $(this).attr("data-id");
  // Find that object with the same id in tagList
  const tag = tagList.find((t) => {
    return t.id == tagId;
  });
  console.log("tagId", tagId);
  console.log("tag", tag);
  // Fill tag value in UI
  $("#updateTagId").val(tagId);
  $("#updateTagName").val(tag.name);
  $("#updateTagColor").val(tag.color);
  $("#updateTagRating").val(tag.rating);
  $("#updateTagModal").modal();
});

$("#updateTagForm").submit(function (e) {
  // prevent default behavior of browser
  e.preventDefault();
  console.log("New Tag Form Submitted !");
  const tagId = $("#updateTagId").val();
  const tag = {
    name: $("#updateTagName").val(),
    color: $("#updateTagColor").val(),
    rating: $("#updateTagRating").val(),
  };
  console.log(tagId, tag, tag.rating);
  // Update data
  // .doc("collection/DOC_ID")
  db.doc(`tagList/${tagId}`)
    .update(tag)
    .then(() => {
      alert("更新成功");
      window.location.reload();
    })
    .catch((err) => {
      console.log(err);
    });
});

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // sign in
    console.log("sign in user", user);
    if (user.email == "admin@gmail.com") {
      $("#loader").fadeOut();
    } else {
    }
  } else {
    // sign out
    console.log("sign out", user);
  }
});
function SignOut() {
  self.location.href = "Home.html"; 
  console.log("Sign Out Success");
}
