// Sample doctor data (replace with API or Figma-exported data)
const doctors = [
    {
        id: 1,
        name: "Dr. John Smith",
        specialty: "Cardiologist",
        image: "https://i.pinimg.com/736x/92/eb/b8/92ebb8868a7d96bb48184758f0a76e9f.jpg",
        bio: "Experienced heart specialist with 15+ years."
    },
    {
        id: 2,
        name: "Dr. Emily Johnson",
        specialty: "Dermatologist",
        image: "https://i.pinimg.com/736x/92/eb/b8/92ebb8868a7d96bb48184758f0a76e9f.jpg",
        bio: "Skin care expert focusing on cosmetic treatments."
    },
    {
        id: 3,
        name: "Dr. Michael Brown",
        specialty: "Pediatrician",
        image: "https://i.pinimg.com/736x/92/eb/b8/92ebb8868a7d96bb48184758f0a76e9f.jpg", // Placeholder
        bio: "Child health and development specialist."
    }
    // Add more from Figma design
];

let filteredDoctors = [...doctors];

// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Search functionality
function searchDoctors() {
    const query = document.getElementById('searchInput').value.toLowerCase();
    filteredDoctors = doctors.filter(doctor => 
        doctor.name.toLowerCase().includes(query) || 
        doctor.specialty.toLowerCase().includes(query)
    );
    renderDoctors();
}

// Render doctors grid
function renderDoctors() {
    const grid = document.getElementById('doctorsGrid');
    grid.innerHTML = filteredDoctors.map(doctor => `
        <div class="doctor-card">
            <img src="${doctor.image}" alt="${doctor.name}">
            <div class="doctor-info">
                <h3>${doctor.name}</h3>
                <p><strong>${doctor.specialty}</strong></p>
                <p>${doctor.bio}</p>
                <button class="book-btn" onclick="openModal('${doctor.name}')">Book Now</button>
            </div>
        </div>
    `).join('');
}

// Open booking modal
function openModal(doctorName) {
    document.getElementById('doctorName').value = doctorName;
    document.getElementById('bookingModal').style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent scroll
}

// Close modal
function closeModal() {
    document.getElementById('bookingModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Form submission
document.getElementById('bookingForm').addEventListener('submit', (e) => {
    e.preventDefault();
    // Simulate booking (replace with API call)
    alert('Appointment booked successfully! We\'ll confirm via email.');
    closeModal();
    document.getElementById('bookingForm').reset();
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderDoctors();
    // Close modal on outside click
    window.onclick = (event) => {
        const modal = document.getElementById('bookingModal');
        if (event.target === modal) {
            closeModal();
        }
    };
});