function viewport()
{
	// const result = document.querySelector(".width")
	// console.log(result)
	document.querySelector(".width").innerText = document.documentElement.clientWidth;
	document.querySelector(".height").innerText = document.documentElement.clientHeight;
}

viewport();