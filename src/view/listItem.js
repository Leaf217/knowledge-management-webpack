
//先从单例中import list
import {list} from "../list/singleton";

let listItem = `<div class="card">
                   <p class="title"> 
                        <a href="" class="tit-url"></a> 
                   </p>
                   <table class="content">
                        <tr class="progress">
                            <td class="name">学习进度：</td>
                            <td class="value">
                                <div class="progress-bar"></div>
                                <span>  card.progress  %</span>
                            </td>
                        </tr>
                        <tr class="evaluation">
                            <td class="name">知识评价：</td>
                            <td class="value stars"></td>
                        </tr>
                        <tr class="notes">
                            <td class="name">学习笔记：</td>
                            <td class="value">
                                <p class="notes-con"></p>
                                <a href="#" class="view-more"></a>
                            </td>
                        </tr>
                   </table>
                   <div class="tags"></div>
                   <img src="../images/Trash.png" alt="trash" class="trash">
                 </div>`;

// console.log(typeof list);

