import React from 'react';

export const Result = () =>{
    const res = [{id: 0, ti: 'Какое ваше любимое мороженное?', re: 'шоколадное'}, 
    {id: 1, ti: 'В каком городе вы живете?', re: 'Дубна'}];
    const Res_title = "Тестовое название опроса";

    return(
        <div id="res_col">
            <h1 id = 'res_tit'>{"Результаты опроса: " + Res_title}</h1>
            <h1>----------------------------</h1>
            {
                res.map((i) => {
                    return(
                        <div id="res_item" key={i.id}>
                            <h1>{i.ti + ': '}</h1>
                            <p>{i.re}</p>
                        </div>
                    );
                })
            }
        </div>
    );
}