# Reticulocyte Calculator

A web-based calculator for determining reticulocyte counts and interpreting results based on patient type.

## Features

- Calculate absolute reticulocyte count from percentage and red blood cell count
- Support for different patient types: Newborn, Adult Male, and Adult Female
- Automatic calculation of reticulocyte percentage from raw count in 1000 RBCs
- Reference ranges specific to each patient category
- Interpretation of results based on clinical standards
- Responsive design that works on desktop and mobile devices

## Usage

1. Select patient type (Newborn, Adult Male, or Adult Female)
2. Enter the total red blood cell count (10¹² cells/L)
3. Enter either:
   - Reticulocyte count in 10 fields (1000 RBCs), or
   - Reticulocyte percentage directly
4. View the calculated results and clinical interpretation

## Reference Values

| Patient Type | Absolute Reticulocytes | Percentage |
|-------------|------------------------|------------|
| Newborn     | 100,000 - 300,000/μL   | 2.00 - 6.00% |
| Adult Male  | 18,800 - 100,860/μL    | 0.42 - 2.23% |
| Adult Female | 23,000 - 93,500/μL    | 0.51 - 2.17% |

## Technologies Used

- HTML5
- JavaScript (ES6)
- Tailwind CSS

## Getting Started

1. Clone this repository:
   ```
   git clone https://github.com/username/reticulocyte-calculator.git
   ```
2. Open `index.html` in your browser to run the application

## License

© 2025 Leonardo Meireles

---

Created to assist in clinical laboratory calculations and educational purposes.
