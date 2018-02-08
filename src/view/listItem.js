
export function generateListItem(knowledge) {

    //觉得这个循环应该写在listItem里，但又没想好怎么写
    let stars = '';
    function generateStars(knowledge) {
        for (let i = 0;i < knowledge.evaluation;i++) {
             stars += `<img src="../images/Star-1.png" alt="star" class="eva-img">`;
        }
        return  stars;
    }

    let tags = '';
    function generateTags(knowledge) {
        for (let tag of knowledge.tags) {
            if (!(tag.length === 0 || tag.replace(/(^s*)|(s*$)/g, "").length === 0 || isNull(tag))) {
                tags += `<span class="tag">${tag}</span>`;
            }
        }
    }

    function isNull(str){
        if ( str == "" ) return true;
        let regular = "^[ ]+$";
        let re = new RegExp(regular);
        return re.test(str);
    }



    return `<li class="item">
                <h3><a href="" class="tit-url">${knowledge.title}</a></h3>
                <dl>
                    <dt>学习进度</dt>
                    <dd>
                        <span class="progress-bar"></span>
                        <span>${knowledge.progress} %</span>
                    </dd>
                    
                    <dt>知识评价</dt>
                    <dd>${generateStars(knowledge)}</dd>
                    
                    <dt>学习笔记</dt>
                    <dd>
                        <p class="notes-con">${knowledge.notes}</p>
                        <a href="#" class="view-more">view more</a>
                    </dd>
                    
                    <dt>标签</dt>
                    <dd>${generateTags(knowledge)}</dd>
                </dl>
               <img src="../images/Trash.png" alt="trash" class="trash">
            </li>`;
}



