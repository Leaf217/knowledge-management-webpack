
export function knowledgeData() {
    let knowledgeData =[];

    let initialKnowledge = [
        [
            ["id", 1],
            ["title", "关于float的那些事儿"],
            ["URL", "http://www.w3school.com.cn/cssref/pr_class_float.asp"],
            ["progress", 100],
            ["evaluation", 3],
            ["notes", "关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿关于float的那些事儿"],
            ["tags", [1, 2, 3]]
        ], [
            ["id", 2],
            ["title", "position知多少"],
            ["URL", "http://www.w3school.com.cn/cssref/pr_class_position.asp"],
            ["progress", 75],
            ["evaluation", 4],
            ["notes", "position知多少position知多少position知多少position知多少position知多少position知多少position知多少position知多少position知多少"],
            ["tags", [1, 2]]
        ], [
            ["id", 3],
            ["title", "1211gfdhfnndhdfhdfgfd"],
            ["URL", "http://www.w3school.com.cn/cssref/pr_class_position.asp"],
            ["progress", 66],
            ["evaluation", 2],
            ["notes", "gfgitiongdfgfdh42356576654435u6uyuydhfjyrdjfjyrdhhvjtdyrdhhmvjdhhmvhthhgchvjyhmhvjyhdgmhvhyedtjfhjyyedtjykkfuuysjx"],
            ["tags", [2, 3]]
        ]
    ];

    for (let knowledge of initialKnowledge) {
        knowledgeData.push(new Map(knowledge));
    }

    return knowledgeData;
}



