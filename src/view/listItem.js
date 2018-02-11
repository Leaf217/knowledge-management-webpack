import star from "../images/Star-1.png";
import trash from "../images/Trash.png";

// export {star};

export function generateListItem(knowledge) {

    return `<li class="item">
                <h3><a href="" class="tit-url">${knowledge.get("title")}</a></h3>
                <dl>
                    <dt>学习进度</dt>
                    <dd>
                        <span class="progress-bar"></span>
                        <span>${knowledge.get("progress")} %</span>
                    </dd>
                    
                    <dt>知识评价</dt>
                    <dd>${generateStars(knowledge)}</dd>
                    
                    <dt>学习笔记</dt>
                    <dd>
                        <p class="notes-con">${knowledge.get("notes")}</p>
                        <a href="#" class="view-more">view more</a>
                    </dd>
                    
                    <dt>标签</dt>
                    <dd>${generateTags(knowledge)}</dd>
                </dl>
                <img src=${trash} alt="trash" class="trash">
            </li>`;

    function generateStars(knowledge) {
        let stars = '';
        for (let i = 0;i < knowledge.get("evaluation");i++) {
            stars += `<img src=${star} alt="star" class="eva-img">`;
        }
        return  stars;
    }

    function generateTags(knowledge) {
        let tags = '';

            for (let tag of knowledge.get("tags")) {
                if (!(tag.replace(/(^s*)|(s*$)/g, "").length == 0 || isNull(tag))) {
                    tags += `<span class="tag">${tag}</span>`;
                }
            }

        return tags;
    }
        // console.log(knowledge.get("tags"));


    function isNull(str){
        if ( str === "" ) return true; //完全空
        let regular = "^[ ]+$"; //^ 起始符，$ 结束符，+ 多个, [ ] 空格
        let re = new RegExp(regular);
        return re.test(str);
    }
}



