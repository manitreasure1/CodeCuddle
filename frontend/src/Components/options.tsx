

function Options({ onLanguageChange }: { onLanguageChange: (language: string) => void }) {
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        onLanguageChange(selectedValue);
    };

    const languageOptions = {
        "Programming Languages": [
          { value: "awk", label: "awk" },
          { value: "bash", label: "bash" },
          { value: "c", label: "c" },
          { value: "c++", label: "c++" },
          { value: "csharp", label: "csharp" },
          { value: "csharp.net", label: "csharp.net" },
          { value: "clojure", label: "clojure" },
          { value: "coffeescript", label: "coffeescript" },
          { value: "crystal", label: "crystal" },
          { value: "d", label: "d" },
          { value: "dart", label: "dart" },
          { value: "elixir", label: "elixir" },
          { value: "erlang", label: "erlang" },
          { value: "forth", label: "forth" },
          { value: "fortran", label: "fortran" },
          { value: "go", label: "go" },
          { value: "groovy", label: "groovy" },
          { value: "haskell", label: "haskell" },
          { value: "java", label: "java" },
          { value: "javascript", label: "javascript" },
          { value: "julia", label: "julia" },
          { value: "kotlin", label: "kotlin" },
          { value: "lisp", label: "lisp" },
          { value: "lua", label: "lua" },
          { value: "nim", label: "nim" },
          { value: "ocaml", label: "ocaml" },
          { value: "octave", label: "octave" },
          { value: "pascal", label: "pascal" },
          { value: "perl", label: "perl" },
          { value: "php", label: "php" },
          { value: "ponylang", label: "ponylang" },
          { value: "python", label: "python" },
          { value: "python2", label: "python2" },
          { value: "racket", label: "racket" },
          { value: "raku", label: "raku" },
          { value: "rscript", label: "rscript" },
          { value: "ruby", label: "ruby" },
          { value: "rust", label: "rust" },
          { value: "scala", label: "scala" },
          { value: "smalltalk", label: "smalltalk" },
          { value: "swift", label: "swift" },
          { value: "typescript", label: "typescript" },
          { value: "vlang", label: "vlang" },
          { value: "zig", label: "zig" },
        ],
        "Esoteric Languages": [
          { value: "befunge93", label: "befunge93" },
          { value: "brachylog", label: "brachylog" },
          { value: "brainfuck", label: "brainfuck" },
          { value: "bqn", label: "bqn" },
          { value: "cjam", label: "cjam" },
          { value: "cow", label: "cow" },
          { value: "dragon", label: "dragon" },
          { value: "emacs", label: "emacs" },
          { value: "emojicode", label: "emojicode" },
          { value: "golfscript", label: "golfscript" },
          { value: "husk", label: "husk" },
          { value: "japt", label: "japt" },
          { value: "jelly", label: "jelly" },
          { value: "llvm_ir", label: "llvm_ir" },
          { value: "lolcode", label: "lolcode" },
          { value: "matl", label: "matl" },
          { value: "osabie", label: "osabie" },
          { value: "paradoc", label: "paradoc" },
          { value: "pure", label: "pure" },
          { value: "pyth", label: "pyth" },
          { value: "retina", label: "retina" },
          { value: "rockstar", label: "rockstar" },
          { value: "samarium", label: "samarium" },
          { value: "vyxal", label: "vyxal" },
          { value: "yeethon", label: "yeethon" },
        ],
        "Other": [
          { value: "basic", label: "basic" },
          { value: "basic.net", label: "basic.net" },
          { value: "dash", label: "dash" },
          { value: "file", label: "file" },
          { value: "forte", label: "forte" },
          { value: "freebasic", label: "freebasic" },
          { value: "fsharp.net", label: "fsharp.net" },
          { value: "fsi", label: "fsi" },
          { value: "iverilog", label: "iverilog" },
          { value: "nasm", label: "nasm" },
          { value: "nasm64", label: "nasm64" },
          { value: "prolog", label: "prolog" },
          { value: "r", label: "r" },
          { value: "sqlite3", label: "sqlite3" },
        ],
      };

  return (
    <select className="select-lang" onChange={handleChange}>
        {Object.entries(languageOptions).map(([category, options]) => (
            <optgroup key={category} label={category}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                ))}
            </optgroup>
        ))}
    </select>
  )
}

export default Options;