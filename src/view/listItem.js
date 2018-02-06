
function generateListItem(knowledge) {

    //觉得这个循环应该写在listItem里，但又没想好怎么写
    let stars = '';
    function generateStars(knowledge) {
        for (let i = 0;i < knowledge.evaluation;i++) {
             stars += `<img src="../images/Star-1.png" alt="star" class="eva-img">`;
        }
        return  stars;
    }


    return `<ul class="item">
                <li class="title">
                    <h3><a href="" class="tit-url">${knowledge.title}</a></h3>
                </li>
               
                <li class="progress">
                    <ul>
                        <li class="name">学习进度：</li>
                        <li class="value">
                            <div class="progress-bar"></div>
                            <span>${knowledge.progress} %</span>
                        </li>
                    </ul>
                </li>
                
                <li class="evaluation">
                    <ul>
                        <li class="name">知识评价：</li>
                        <li class="value">${generateStars(knowledge)}</li>
                    </ul>
                </li>
                
                <li class="notes">
                    <ul>
                        <li class="name">学习笔记：</li>
                        <li class="value">
                            <p class="notes-con">${knowledge.notes}</p>
                            <a href="#" class="view-more">view more</a>
                        </li>
                    </ul>
                </li>
            
                <li class="tags"></li>
               
               <!--<img src="../images/Trash.png" alt="trash" class="trash">-->
             </ul>`;
}



