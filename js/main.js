const toggler = document.querySelector(".nav__toggler");
const navbar = document.querySelector(".nav");
toggler.addEventListener("click", (e) => {
	// console.log("clicked");
	navbar.classList.toggle("nav__expanded");
});

{
	/* <ul class="tabs">
	<li class="tab activ" data-tab-target="tab-one">
		tab -1
	</li>
	<li class="tab activ" data-tab-target="tab-two">
		tab -2
	</li>
	<li class="tab activ" data-tab-target="tab-three">
		tab -3
	</li>
</ul>;
<div class="">
	<div class="tab-content active" id="tab-one">
		tab one content
	</div>

	<div class="tab-content active" id="tab-two">
		tab one two
	</div>

	<div class="tab-content active" id="tab-three">
		tab one three
	</div>
</div>; */
}

const tabs = document.querySelectorAll(".tab");
const tabContents = document.querySelectorAll(".tab-content");
tabs.forEach((tab) => {
	tab.addEventListener("click", (e) => {
		const targeTabContent = document.querySelector(`#${tab.dataset.tabTarget}`);

		// REMOVE PREVIOUS ACTIVED CLASSES
		tabs.forEach((tab) => tab.classList.remove("active"));
		tabContents.forEach((tabContent) => tabContent.classList.remove("active"));

		// ADD NEW ACTIVE CLASSES
		tab.classList.add("active");
		targeTabContent.classList.add("active");
	});
});

const accordionHeaders = document.querySelectorAll(".accordion__header");
const accordion = document.querySelector(".accordion");
accordionHeaders.forEach((item) => {
	item.addEventListener("click", (e) => {
		console.log(e.target.parentElement);
		e.target.parentElement.classList.toggle("accordion__expanded");
	});
});
