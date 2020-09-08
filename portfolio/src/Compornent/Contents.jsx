import React from 'react';


const CheckDisplayMenu = (target) => {
    switch(target) {
        case "/Introduction" :
            return  "これまで4年間で、顧客先開発環境に常駐しバックエンドエンジニアをしてまいりました<br>"
                        + "JavaとPythonを用いた開発を行い、経験の全てが生産管理・顧客管理システムです。<br>"
                        + "基本設計フェーズから運用保守までを経験し、ウォーターフォール開発ではマネジメントを、<br>"
                        + "アジャイル開発では1メンバーとして参画していました。<br>"
        case "/Skills" : 
            return "私のスキルを年表別にしました。ご確認ください。<br>"
        case "/Contact" :
            return "gmail:mamoru12150927@gmail.com<br>" 
                    + "github:@mamoru12150927"
                    + "Qitta::@mamoru12150927"
        default :
            return  "これまで4年間で、顧客先開発環境に常駐しバックエンドエンジニアをしてまいりました<br>"
            + "JavaとPythonを用いた開発を行い、経験の全てが生産管理・顧客管理システムです。<br>"
            + "基本設計フェーズから運用保守までを経験し、ウォーターフォール開発ではマネジメントを、<br>"
            + "アジャイル開発では1メンバーとして参画していました。<br>"

    }
} 


const Contents = (props) => {
    const dispContents = CheckDisplayMenu(props.clicked);
    const lines = dispContents.split('<br>').map((v) => {
        return (<p className="portfolio-Contents-msg">{v}</p>)
    })
    return (
        <div>
            {lines}
        </div>
    );
}

export default Contents;
