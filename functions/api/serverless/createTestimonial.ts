export async function main(argumentJson) {
   let url = argumentJson["requestUrl"];
   let questionMark = url.indexOf("?");
   url = url.substring(questionMark);
   let urlParams = new URLSearchParams(url);
   let title = urlParams.get("title");
   let author = urlParams.get("author");
   let authorEmail = urlParams.get("authorEmail");
   let content = urlParams.get("content");
   let label1 = urlParams.get("label1");
   let label2 = urlParams.get("label2");
   let label3 = urlParams.get("label3");
   let rating = urlParams.get("rating");
   let advisor = urlParams.get("locationId");
   let date = urlParams.get("date");
   let key = "7579d93a8ebdcbe477e3f59f50376a04";
 
   const postUrl = 'https://api.yext.com/v2/accounts/me/entities?api_key=' + key + '&entityType=ce_testimonial' + '&v=20220808';
   let data = {
        "name": title,
        "c_author": author,
        "c_authorEmail": authorEmail,
        "c_content" : content,
	"c_rating" : rating,
	"c_labels" : [label1, label2, label3],
	"c_location" : [advisor],
	"c_reviewDate" : date
       }
   
    const response = await fetch(postUrl, {
        method: 'POST',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
	    'Cache-control': 'no-cache'
        },
        redirect: 'follow',
        body: JSON.stringify(data)
      });
   return {
  	"statusCode" : 200,
	"status": response.status
   }
}
