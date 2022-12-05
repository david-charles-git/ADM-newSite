/*
    Project : AddMustard
    Author(s) : David Charles
*/

//Dependencies
import React from "react";
import {Children, useState} from "react";

//Components
import TiltButton from "../Buttons/TiltButton";

//Styles
import "./Grid.scss";

//Interfaces
import { SingleColumnGridInterface } from "./GridInterfaces";

//Component
const SingleColumnGrid : React.FC<SingleColumnGridInterface> = (props : SingleColumnGridInterface) => {
    //Properties
    const childrenCount : number = Children.count(props.children);
    const gridClass : string | undefined = props.data.gridClass;
    const gridLoadCount : number = props.data.gridLoadCount || 100;
    const gridPagination : string | undefined = props.data.gridPagination;
    const gridPaginationCopy : string | undefined = props.data.gridPaginationCopy;
    const gridPaginationLinkHref : string | undefined = props.data.gridPaginationLinkHref;
    const gridPaginationLinkType : string | undefined = props.data.gridPaginationLinkType;
    
    //States
    var [currentActiveItemsCount, setCurrentActiveItemsCount] = useState<number>(gridLoadCount);
    var [loadMoreButtonHidden, setLoadMoreButtonHidden] = useState<boolean>((gridLoadCount > childrenCount));

    //Functions
    const generatePaginationContainer = () => {
        if (gridPagination === "none") {
            return <></>

        } else if (gridPagination === "link") {
            return (
                <div className="paginationContainer link">
                    <div className="inner">
                        <TiltButton data={{
                            buttonCopy : gridPaginationCopy,
                            buttonType : gridPaginationLinkType,
                            buttonHref : gridPaginationLinkHref,
                            tiltBackgroundColor : "#000"
                        }} />
                    </div>
                </div>
            )

        } else if (gridPagination === "loadMore") {
            if (loadMoreButtonHidden) {
                return <></>

            } else {
                return (
                    <div className="paginationContainer loadMore">
                        <div className="inner">
                            <TiltButton data={{
                                buttonCopy : gridPaginationCopy,
                                buttonType : "function",
                                buttonFunction : handleLoadMore,
                                tiltBackgroundColor : "#000"
                            }} />
                        </div>
                    </div>
                )
            }

        } else if (gridPagination === "paged") {
            return (
                <div className="paginationContainer paged">
                    <div className="inner" />
                </div>
            )

        } else {
            return <></>
        }
    };
    const handleLoadMore = () => {
        var newActiveItemCount : number = currentActiveItemsCount + gridLoadCount > childrenCount ? childrenCount : currentActiveItemsCount + gridLoadCount;

        if (newActiveItemCount === childrenCount) {
            setLoadMoreButtonHidden(true);

        }

        setCurrentActiveItemsCount(newActiveItemCount);
    };

    //Variables
    const GridClass : string = gridClass ? "SingleColumnGrid Grid" + gridClass : "SingleColumnGrid Grid";
    
    return (
        <div className={GridClass}>
            <div className="outer">
                <div className="inner">
                    {
                        childrenCount > 0 ?
                            Children.map(props.children, (child : React.ReactNode  | React.ReactElement, key : number) => {
                                const childClass : string = currentActiveItemsCount - 1 >= key ? "item active" : "item";

                                return (
                                    <div className={childClass} key={key}>
                                        {child}
                                    </div>
                                )
                            })
                            :
                            <></>
                    }
                </div>

                {generatePaginationContainer()}
            </div>
        </div>
    );
};
export default SingleColumnGrid;