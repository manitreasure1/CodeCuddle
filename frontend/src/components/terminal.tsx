import React from "react";


interface TerminalProps {
  isClosed: boolean;
  handleRunIconClick: () => void;
}

function Terminal({isClosed, handleRunIconClick}: TerminalProps) {

  return (
    <>
    {
      isClosed ||
        <div className=" text-white d-flex flex-column position-relative lh-lg" style={{ }}>
          <span className="btn text-white position-sticky top-0 "  onClick={handleRunIconClick}>&times;</span>
            <output className="p-3 text-center">
              Lorem ipsum dolor 
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda dolorem libero dolores impedit, numquam et magnam soluta, minima eveniet laudantium nam voluptatum sequi sunt doloribus tempora nisi totam laborum labore placeat, explicabo officiis? Aliquam fuga laudantium tenetur corporis reiciendis quasi odio. Corporis culpa ea dolorem nulla alias ratione sequi, repellendus dolor tempora vero facilis modi aut. Dicta ratione excepturi vel incidunt necessitatibus similique dolores, earum rerum tempora debitis ea? Labore impedit harum, ratione consequuntur ut asperiores natus blanditiis maiores quod? Non vero magni libero a sed cupiditate eos! Nostrum maxime unde soluta ipsum nulla delectus eos eaque sint amet aliquam tenetur, voluptatem sapiente iure commodi repellat natus temporibus perferendis odit nihil architecto ratione sit. Perferendis officia mollitia error ipsum unde totam tempora repellat. Cumque quasi nostrum totam modi maxime non esse dicta atque quod qui eos consequuntur ratione alias nesciunt provident veniam, laudantium voluptates reiciendis. Assumenda hic temporibus laboriosam quos placeat maiores, cum deleniti deserunt necessitatibus amet vero, et, culpa sapiente quod minima qui debitis voluptatem magni. Dicta iure provident, quisquam nostrum voluptatum voluptate animi pariatur, modi perferendis nihil molestiae deleniti ducimus tempore a ad doloremque, ullam culpa qui reiciendis. Culpa dolore atque, odit fugit qui aspernatur voluptate eum suscipit?
              sit amet consectetur adipisicing elit. Eos odit at quis minima. Molestias eum vitae vero inventore sint iusto repellat libero exercitationem dolores debitis impedit deserunt odit ex autem ullam sed laboriosam asperiores esse at mollitia, facere consequuntur excepturi consequatur quibusdam. Qui dolores iusto, soluta repudiandae quo facilis expedita perferendis, 
            </output>
        </div>
    }
    </>
  )
}

export default React.memo(Terminal);