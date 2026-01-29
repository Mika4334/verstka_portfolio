export function ChooseOption() {
    return (
        <fieldset aria-label="Choose a memory option" class="mx-auto max-w-md">
            <div class="flex items-center justify-between">
                <div class="text-sm/6 font-medium text-gray-900 dark:text-white">RAM</div>
                <a href="#" class="text-sm/6 font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400">See performance specs</a></div>
            <div class="mt-4 grid grid-cols-6 gap-2 max-sm:grid-cols-3 pointer-coarse:mt-6 pointer-coarse:grid-cols-3 pointer-coarse:gap-4">
                <label class="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
                    <input class="sr-only" type="radio" value="4 GB" name="memory-option" />
                    <span>4 GB</span>
                </label>
                <label class="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
                    <input class="sr-only" type="radio" value="8 GB" checked="" name="memory-option" />
                    <span>8 GB</span>
                </label>
                <label class="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
                    <input class="sr-only" type="radio" value="16 GB" name="memory-option" />
                    <span>16 GB</span>
                </label>
                <label class="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
                    <input class="sr-only" type="radio" value="32 GB" name="memory-option" />
                    <span>32 GB</span>
                </label>
                <label class="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
                    <input class="sr-only" type="radio" value="64 GB" name="memory-option" />
                    <span>64 GB</span>
                </label>
                <label class="flex items-center justify-center rounded-md bg-white p-2 text-sm font-semibold text-gray-900 uppercase ring-1 ring-gray-300 not-data-focus:not-has-checked:ring-inset hover:bg-gray-50 has-checked:bg-indigo-600 has-checked:text-white has-checked:ring-0 has-checked:hover:bg-indigo-500 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-indigo-600 data-focus:ring-2 data-focus:ring-indigo-600 data-focus:ring-offset-2 data-focus:has-checked:ring-2 sm:flex-1 dark:bg-transparent dark:text-white dark:ring-white/20 dark:hover:bg-gray-950/50 pointer-coarse:p-4">
                    <input class="sr-only" type="radio" value="128 GB" name="memory-option" />
                    <span>128 GB</span>
                </label>
            </div>
        </fieldset>
    )
}