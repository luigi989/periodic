import React from 'react';

function getHeaderColor(category) {
    switch (category) {
        case 'diatomic nonmetal':  return 'bg-[#0066CC]'
        case 'noble gas': return 'bg-[#293F76]'
        case 'alkali metal': return 'bg-[#833081]'
        case 'alkaline earth metal': return 'bg-[#A63737]'
        case 'metalloid': return 'bg-[#006600]'
        case 'polyatomic nonmetal': return 'bg-[#0066CC]'
        case 'post-transition metal': return 'bg-[#00cc00]'
        case 'transition metal': return 'bg-[#FF6600]'
        case 'lanthanide': return 'bg-[#CC6699]'
        case 'actinide': return 'bg-[#CC33FF]'
        default: return 'bg-[#05595B]'
    }
}

function getBodyColor(category) {
    switch (category) {
        case 'diatomic nonmetal':  return 'bg-[#03C]'
        case 'noble gas': return 'bg-[#1B284B]'
        case 'alkali metal': return 'bg-[#582062]'
        case 'alkaline earth metal': return 'bg-[#722525]'
        case 'metalloid': return 'bg-[#003C00]'
        case 'polyatomic nonmetal': return 'bg-[#03C]'
        case 'post-transition metal': return 'bg-[#008400]'
        case 'transition metal': return 'bg-[#A64200]'
        case 'lanthanide': return 'bg-[#AF3A75]'
        case 'actinide': return 'bg-[#A600DD]'
        default: return 'bg-[#062C30]'
    }
}

function getCategory(category) {
    switch (category) {
        case 'diatomic nonmetal':  return 'cell diatomicNonmetal'
        case 'noble gas': return 'cell nobleGas'
        case 'alkali metal': return 'cell alkaliMetal'
        case 'alkaline earth metal': return 'cell alkalineEarthMetal'
        case 'metalloid': return 'cell metalloid'
        case 'polyatomic nonmetal': return 'cell polyatomicNonmetal'
        case 'post-transition metal': return 'cell postTransitionMetal'
        case 'transition metal': return 'cell transitionMetal'
        case 'lanthanide': return 'cell lanthanide'
        case 'actinide': return 'cell actinide'
        default: return 'cell unknown'
    }
}

function Cell(props) {
    return(
        <div className={"wh-10 text-white flex flex-col " + getCategory(props.eData.category)}>
            <div className={"px-1 " + getHeaderColor(props.eData.category)}>
                {props.eData.number}
            </div>
            <div className={"text-center grow " + getBodyColor(props.eData.category)}>
                <div className="">{props.eData.symbol}</div>
                <div className="">
                    {props.eData.atomic_mass.toPrecision(3)}
                </div>
            </div>
        </div>
    );
}

function IntervalCell(props) {
    return(
        <div className="flex flex-col wh-10">
            <div className="px-1 bg-[#2B2B2B]">&nbsp;</div>
            <div className="flex items-center justify-center bg-[#171010] text-white w-full text-xs grow">
                {props.interval}
            </div>
        </div>
    );
}

function EmptyCell() {
    return (
        <div className="wh-10">
            <div className="bg-transparent px-1">
            </div>
            <div className="bg-info flex flex-col items-center">
                <div></div>
                <div className="flex-grow"></div>
            </div>
        </div>
    );
}

function NumberCell(props) {
    function onHover(state, row) {
        var rows = document.getElementById(String(row)).parentElement.childNodes;
        var rowNum = document.getElementById(String(row) + 'num');
        rows.forEach(currentRow => {
            if(currentRow.id !== String(row)) {
                if(state) {
                    rowNum.style.textDecoration = 'underline';
                    currentRow.style.filter = 'grayscale(100%)';
                    currentRow.style.transition = 'all 0.3s';
                } else {
                    rowNum.style.textDecoration = 'none';
                    currentRow.style.filter = 'none';
                    currentRow.style.transition = 'all 0.3s';
                }
            }
        });
    }

    return (
        <div id={props.id} onMouseEnter={() => onHover(true, props.row)} onMouseLeave={() => onHover(false, props.row)} 
            className={props.className + ' wh-10 inline-flex justify-center items-center text-xl'}>
            {props.children}
        </div>
    );
}

export {
    Cell,
    EmptyCell,
    IntervalCell,
    NumberCell,
};
