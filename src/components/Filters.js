import { useGlobalContext } from "../Context";
export default function Filters(book) {
  const { setExtraParams } = useGlobalContext();
  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (formData.get("sort") != "") {
      setExtraParams("&sort=" + formData.get("sort"));
    } else {
      setExtraParams("");
    }
  }

  return (
    <div>
      <div class="ml-8">
        <div class="max-w-50 flex justify-around gap-4 bg-cyan-50 p-11 shadow-lg backdrop-blur-lg dark:border-slate-600/60 dark:bg-slate-800/50 flex-col rounded-lg">
          <form onSubmit={handleSubmit}>
            <div>
              <ul class="grid grid-cols-1 gap-3">
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-cyan-600 ">
                      <input
                        type="radio"
                        class="accent-cyan-500 h-3 w-3 mr-0.5  rounded-full shadow "
                        name="sort"
                        value="editions"
                      />{" "}
                      Most Editions
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-cyan-600">
                      <input
                        type="radio"
                        class="accent-cyan-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value=""
                      />{" "}
                      Relevance
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-cyan-600">
                      <input
                        type="radio"
                        class="accent-cyan-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value="old"
                      />{" "}
                      First Published
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-cyan-600">
                      <input
                        type="radio"
                        class="accent-cyan-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value="new"
                      />{" "}
                      Most Recent
                    </label>
                  </div>
                </li>
                <li class="min-w-max ">
                  <div class="md:mx-2">
                    <label className="text-sm font-semibold text-gray-700 hover:text-cyan-600">
                      <input
                        type="radio"
                        class="accent-cyan-500 h-3 w-3 mr-0.5 rounded-full shadow "
                        name="sort"
                        value="rating"
                      />{" "}
                      Top Rated
                    </label>
                  </div>
                </li>
              </ul>
            </div>

            <button
              type="submit"
              class="border-2 border-cyan-500 rounded-full font-semibold mt-8 ml-2 text-sm text-center px-3 py-2 w-28 text-cyan-500 cursor-pointer hover:bg-cyan-500 hover:text-white"
            >
              Apply filters
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
